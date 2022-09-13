
f_s = 195312.5 #sampling frequency


#DAQ_ADF_ANALYSIS_WINDOW_SIZE = 131072
#DAQ_ADF_ANALYSIS_WINDOW_OVERLAP = 7812
#frame_length = DAQ_ADF_ANALYSIS_WINDOW_SIZE - DAQ_ADF_ANALYSIS_WINDOW_OVERLAP #check whether this can be hard coded from the beginning or whether these values change
frame_length = 123260
l = frame_length + 3 #number of 4 Bytes in the whole file

struct ASignal
    #dom_id::String add if necessary
    utc_seconds::UInt32 # UNIX timestamp
    ns_cycles::UInt32 # number of 16ns cycles
    samples::UInt32 #  as 'samples' corresponds to the frame_length which is apprantely a fixed number 123260 so maybe this isnt necessary
    pcm::Vector{Float32}
end

function read_asignal(filename::AbstractString,fourbyte_length::Int)

    container = Vector{UInt32}(undef,3)
    read!(filename,container)
    utc_seconds = container[1]
    ns_cycles = container[2]
    samples = container[3]

    container = Vector{Float32}(undef,fourbyte_length) #now read as floats to get the pcm data
    read!(filename,container)
    pcm = container[4:end] #pcm data starts at entry 4

    return ASignal(utc_seconds, ns_cycles, samples, pcm) #plug everthing into our data type
end

function plot_asignal(signal::ASignal, f_s=195312.5, l=frame_length) #this should be done as a recipe, but now just for convience
    T_s = 1/f_s * l
    ts = range(0,T_s,length=l)

    p = plot(ts,signal.pcm)
    xlabel!("time in s")
    ylabel!("amplitude")

    return p
end

function to_wav(signal::ASignal, path, f_s, gain_db=0.0)
    pcm = signal.pcm

    if gain_db != 0.0
        pcm *= 10^(0.1 * gain_db)
    end

    wavwrite(pcm, path, Fs=floor(Int,f_s))
end
