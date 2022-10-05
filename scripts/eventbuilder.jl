doc = """Acoustics event builder.

Usage:
  event_builder.jl [options]  -i INPUT_FILES_DIR -D DETX -t TOASHORTS
  event_builder.jl -h | --help
  event_builder.jl --version

Options:
  -t TOASHORTS        A CSV file containing the TOAs, obtained from the KM3NeT DB (toashorts).
  -D DETX             The detector description file.
  -i INPUT_FILES_DIR  Directory containing tripod.txt, hydrophone.txt, waveform.txt
  -h --help           Show this screen.
  --version           Show version.

"""
using DocOpt
args = docopt(doc)
using KM3Acoustics

function main()
    println("Reading detector")
    detector = Detector(args["-D"])
    println("Reading toashort")
    toashort = read_toashort(args["-t"])

    println("Reading hydrophones")
    hydrophones = read(joinpath(args["-i"], "hydrophone.txt"), Hydrophone)
    println("Reading tripods")
    tripods = read(joinpath(args["-i"], "tripod.txt"), Tripod)
    println("Reading waveforms")
    waveforms = read(joinpath(args["-i"], "waveform.txt"), Waveform)
    trigger_param = read(joinpath(args["-i"], "acoustics_trigger_parameters.txt"), TriggerParameter)
    println("Reading trigger parameters")


    receivers = Dict{Int32, Receiver}()
    emitters = Dict{Int8, Emitter}()

    tripod_to_emitter!(tripods, emitters, detector)

    check_modules!(receivers, detector, hydrophones)

    all_transmissions = transmissions_by_emitterid(emitters)

    calculate_TOE!(all_transmissions, toashort, waveforms, receivers, emitters, detector.pos.z)

    events = build_events(all_transmissions, detector.id, trigger1!, trigger_param)

end
"""
    function tripod_to_emitter!(tripods, emitters, detector)

Tripods position reference gets changed, such that the position is measured from the position of the detector.
"""
function tripod_to_emitter!(tripods, emitters, detector)
    for tripod ∈ tripods # change position of tripods from .txt file to relative position of the detector
        emitters[tripod.id] = Emitter(tripod.id, tripod.pos - detector.pos)
    end
end
"""
    function check_modules!(receivers, detector, hydrophones)

Checks if the modules in detector have hydrophones or piezos, if they have they will be written in receiver and emitters dicts.
"""
function check_modules!(receivers, detector, hydrophones)

    hydrophones_map = Dict{Int32, Hydrophone}()
    for hydrophone ∈ hydrophones # makes a dictionary of hydrophones, with string number as keys
        hydrophones_map[hydrophone.location.string] = hydrophone
    end

    for (module_id, mod) ∈ detector.modules # go through all modules and check whether they are base modules and have hydrophone
        if (mod.location.floor == 0 && hydrophoneenabled(mod)) || (mod.location.floor != 0 && piezoenabled(mod)) #or they are no base module and have piezo
            pos = Position(0, 0, 0)
            if mod.location.floor == 0 # if base module and hydrophone
               pos += hydrophones_map[mod.location.string].pos # position in of hydrophone relative to T bar gets added
            end
            pos += mod.pos
            receivers[module_id] = Receiver(module_id, pos, mod.t₀)
        end
    end
end
"""
    function transmissions_container(emitters)

Sets up an dictionary with keys emitter id for all transmissions.
"""
function transmissions_by_emitterid(emitters)
    d = Dict{Int32, Vector{Transmission}}()
    for (id, emitter) ∈ emitters
        d[id] = Transmission[]
    end
    d
end
"""
    function calculate_TOE!(DD, toashort, waveforms, receivers, emitters)

Changes emitter ids from toashort to tripod ids from tripod.txt. Then checks if ids from the signals from toashorts coincide
with ids in the detector. If they coincide the TOE is calculated and a transmission is pushed into an Dictionary.
"""
function calculate_TOE!(DD, toashort, waveforms, receivers, emitters, det_depth)
    for row ∈ eachrow(toashort)
        emitter_id = waveforms.ids[row.EMITTERID]
        if (haskey(receivers, row.DOMID)) && (haskey(emitters, emitter_id))
            toa = row.UTC_TOA - receivers[row.DOMID].t₀ * 1e-9
            toe = toa - traveltime(receivers[row.DOMID], emitters[emitter_id], det_depth)
            T = Transmission(row.RUN, row.DOMID, row.QUALITYFACTOR, toa, toe)
            push!(DD[emitter_id], T)
        end
    end
end
"""
    function trigger!(events, emitter_id, transmissions, trigger, det_id)

If the number of signals from one emitter during a time window tmax exceeds a preset threshold and event is triggered.
An event is written if more than nmin signals appear during the time window.
"""
function trigger!(events, emitter_id, transmissions, trigger, det_id)
    L = length(transmissions)
    for (i, transmission) ∈ enumerate(transmissions) # go through all signals
        j = copy(i)
        j += 1
        while (j <= L) && (transmissions[j].TOE - transmission.TOE <= trigger.tmax)
            j += 1 # group signal during a certain kind of time intervall
        end
        k = j - i + 1 #events in time frame
        if k >= trigger.nmin #if more then 90 signal during tmax write down the event
           push!(events, Event(det_id, k, emitter_id, transmissions[i:j]))
        end
    end
end

"""
    function trigger1!(events, emitter_id, transmissions, trigger, det_id)

If the number of signals from one emitter during a time window tmax exceeds a preset threshold and event is triggered.
An event is written if more than nmin signals appear during the time window and if the time difference between additional signals is
less than tmax these signals are also included in the event.
"""
function trigger1!(events, emitter_id, transmissions, trigger, det_id)
    L = length(transmissions)
    j = 2 # start at two to compare with event 1
    i = 1
    while i <= L # go through all signals
        while (j <= L) && ((transmissions[j].TOE - transmissions[i].TOE <= trigger.tmax) || ((j - i + 1 >= trigger.nmin) && transmissions[j].TOE - transmissions[j-1].TOE <= trigger.tmax))
            j += 1 # group signal during a certain kind of time intervall
        end
        k = j - i + 1 #events in time frame

        if k >= trigger.nmin #if more then 90 signal during tmax write down the event
            push!(events, Event(det_id, k, emitter_id, transmissions[i:j]))
            i = j #set loop to event j which is the first event not involved in event ealier
        else
            i += 1 #if less then nmin signals start with next transmission
        end
    end
end
"""
    function build_events!(events, DD, det_id, trigger)

Sorts all transmissions from one emitter by TOE and then build events.
"""
function build_events(all_transmissions, det_id, trigger!, trigger_param)
    events = Event[]
    for (emitter_id, transmissions) ∈ all_transmissions
        sort!(transmissions, by = x -> x.TOE)
        trigger!(events, emitter_id, transmissions, trigger_param, det_id)
    end
    events
end
main()
