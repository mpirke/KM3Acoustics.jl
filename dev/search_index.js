var documenterSearchIndex = {"docs":
[{"location":"internalapis/#Commonly-used","page":"APIs","title":"Commonly used","text":"","category":"section"},{"location":"internalapis/","page":"APIs","title":"APIs","text":"Modules = [KM3Acoustics]\nFilter   = t -> contains(string(t), \"Lazy\")","category":"page"},{"location":"internalapis/#More-Internal","page":"APIs","title":"More Internal","text":"","category":"section"},{"location":"internalapis/","page":"APIs","title":"APIs","text":"Modules = [KM3Acoustics]\nFilter   = t -> !(contains(string(t), \"Lazy\"))","category":"page"},{"location":"internalapis/#KM3Acoustics.ASignal","page":"APIs","title":"KM3Acoustics.ASignal","text":"ASignal is a custom type with four fields to store all the information inside the raw acoustic binary files.\n\ndom_id::Int32 ID of the module\nutc_seconds:: UInt32 storing the first 4 Bytes and is a UNIX time stamp\nns_cycles:: UInt32 storing the second 4 Bytes\nsamples:: UInt32 storing the third 4 Bytes, corresponding to the number of data points accuired during the measring window\npcm:: Vector of Float32 of length frame_length, storing all other 4 Byte blocks. Each entry is a data point of the acoustic signal.\n\n\n\n\n\n","category":"type"},{"location":"internalapis/#KM3Acoustics.Detector","page":"APIs","title":"KM3Acoustics.Detector","text":"A KM3NeT detector.\n\n\n\n\n\n","category":"type"},{"location":"internalapis/#KM3Acoustics.Detector-Tuple{AbstractString}","page":"APIs","title":"KM3Acoustics.Detector","text":"function Detector(filename::AbstractString)\n\nCreate a Detector instance from a DETX file.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.Detector-Tuple{IO}","page":"APIs","title":"KM3Acoustics.Detector","text":"function Detector(io::IO)\n\nCreate a Detector instance from an IO stream.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.DetectorModule","page":"APIs","title":"KM3Acoustics.DetectorModule","text":"Either a base module or an optical module. A non-zero status means the module is \"not OK\". Individual bits can be read out to identify the problem (see definitions/module_status.jl for the bit positions and check them using the nthbitset() function).\n\n\n\n\n\n","category":"type"},{"location":"internalapis/#KM3Acoustics.Emitter","page":"APIs","title":"KM3Acoustics.Emitter","text":"The tripods in the seabed are Emitters of acoustics signals.\n\n\n\n\n\n","category":"type"},{"location":"internalapis/#KM3Acoustics.Event","page":"APIs","title":"KM3Acoustics.Event","text":"An accoustic event is a collection, of a minimum number, of accoustic signals emmited from one tripod, gathered from multiple modules during a certain period of time.\n\n\n\n\n\n","category":"type"},{"location":"internalapis/#KM3Acoustics.EventHeader","page":"APIs","title":"KM3Acoustics.EventHeader","text":"EventHeader contains the information aboout detector, emitter, run.\n\n\n\n\n\n","category":"type"},{"location":"internalapis/#KM3Acoustics.Hydrophone","page":"APIs","title":"KM3Acoustics.Hydrophone","text":"A hydrophone, typically installed in the base module of a KM3NeT detector's string.\n\n\n\n\n\n","category":"type"},{"location":"internalapis/#KM3Acoustics.Location","page":"APIs","title":"KM3Acoustics.Location","text":"A module's location in the detector where string represents the detection unit identifier and floor counts from 0 from the bottom to top. Base modules are sitting on floor 0 and optical modules on floor 1 and higher.\n\n\n\n\n\n","category":"type"},{"location":"internalapis/#KM3Acoustics.PMT","page":"APIs","title":"KM3Acoustics.PMT","text":"The photomultiplier tube of an optical module. The id stands for the DAQ channel ID.\n\nA non-zero status means the PMT is \"not OK\". Individual bits can be read out to identify the problem (see definitions/pmt_status.jl for the bit positions and check them using the nthbitset() function).\n\n\n\n\n\n","category":"type"},{"location":"internalapis/#KM3Acoustics.Precalibration","page":"APIs","title":"KM3Acoustics.Precalibration","text":"struct Precalibration <: Function\n\nData structure which stores all information needed for the precalibration process.\n\n\n\n\n\n","category":"type"},{"location":"internalapis/#KM3Acoustics.Precalibration-Tuple{Any, Vector{Event}, OrderedCollections.OrderedDict{Int32, Hydrophone}, Any, Dict{Int8, Emitter}, Any}","page":"APIs","title":"KM3Acoustics.Precalibration","text":"function Precalibration(detector_pos, hydrophones::OrderedDict{Int32, Hydrophone}, key_fixhydro::Int, events::Vector{Event}, emitters::Dict{Int8, Emitter})\n\nMethod to set up the precalibration data type.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.RawToashort","page":"APIs","title":"KM3Acoustics.RawToashort","text":"RawToashort is an input data type which stores all information from the toashort file.\n\n\n\n\n\n","category":"type"},{"location":"internalapis/#KM3Acoustics.Receiver","page":"APIs","title":"KM3Acoustics.Receiver","text":"Receivers are either DOMs with an piezo element or a baseunit with a hydrophone.\n\n\n\n\n\n","category":"type"},{"location":"internalapis/#KM3Acoustics.StringCalibration","page":"APIs","title":"KM3Acoustics.StringCalibration","text":"Stores all the information needed for optimization procedure.\n\n\n\n\n\n","category":"type"},{"location":"internalapis/#KM3Acoustics.StringCalibration-Tuple{Float64, Float64, KM3Acoustics.RealString, Vector{Event}, Dict{Int8, Emitter}}","page":"APIs","title":"KM3Acoustics.StringCalibration","text":"Additional contructor for StringCalibration.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.Toashort","page":"APIs","title":"KM3Acoustics.Toashort","text":"Toashort is an input data type which stores all important information from the toashort file.\n\n\n\n\n\n","category":"type"},{"location":"internalapis/#KM3Acoustics.ToyStringCalibration","page":"APIs","title":"KM3Acoustics.ToyStringCalibration","text":"Stores all the information needed for toy optimization procedure.\n\n\n\n\n\n","category":"type"},{"location":"internalapis/#KM3Acoustics.ToyStringCalibration-Tuple{ToyString, Vector{Event}, Dict{Int8, Emitter}}","page":"APIs","title":"KM3Acoustics.ToyStringCalibration","text":"Additional contructor for ToyStringCalibration.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.Transmission","page":"APIs","title":"KM3Acoustics.Transmission","text":"Datatype which has all information of one Transmission which is later needed for the fitting procedure.\n\n\n\n\n\n","category":"type"},{"location":"internalapis/#KM3Acoustics.TriggerParameter","page":"APIs","title":"KM3Acoustics.TriggerParameter","text":"Certain parameters which define an acoustic event.\n\n\n\n\n\n","category":"type"},{"location":"internalapis/#KM3Acoustics.Tripod","page":"APIs","title":"KM3Acoustics.Tripod","text":"A tripod installed on the seabed which sends acoustic signals to modules.\n\n\n\n\n\n","category":"type"},{"location":"internalapis/#KM3Acoustics.Waveform","page":"APIs","title":"KM3Acoustics.Waveform","text":"Waveform translates Emitter ID to Tripod ID.\n\n\n\n\n\n","category":"type"},{"location":"internalapis/#Base.getindex-Tuple{DetectorModule, Any}","page":"APIs","title":"Base.getindex","text":"Base.getindex(d::DetectorModule, i) = d.pmts[i+1]\n\nThe index in this context is the DAQ channel ID of the PMT, which is counting from 0.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#Base.isless-Tuple{Transmission, Transmission}","page":"APIs","title":"Base.isless","text":"function isless(A::Transmission, B::Transmission)\n\nCompares two transmissions. Necessary for sorting transmissions in the right way: Sort first by earliest TOA and if TOAs are equal sort first by higher Quality factor Q.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#Base.read","page":"APIs","title":"Base.read","text":"function read(filename::AbstractString,T::Type{ASignal}, overlap::Int=DAQ_ADF_ANALYSIS_WINDOW_OVERLAP)\n\nReads in a raw binary acoustics file.\n\n\n\n\n\n","category":"function"},{"location":"internalapis/#Base.read-Tuple{AbstractString, Any, Detector}","page":"APIs","title":"Base.read","text":"function read(filename::AbstractString, Emitter, detector::Detector)\n\nReads in the tripod file, and return them as Emitters, where the positions are references in the detector coordinate system.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#Base.read-Tuple{AbstractString, Type{Hydrophone}}","page":"APIs","title":"Base.read","text":"function read(filename::AbstractString, T::Type{Hydrophone})\n\nReads a vector of Hydrophones from an ASCII file.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#Base.read-Tuple{AbstractString, Type{Toashort}, Int64}","page":"APIs","title":"Base.read","text":"function read(filename::AbstractString, T::Type{Toashort}, run::Int)\n\nReads a HDF5 file of toashorts.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#Base.read-Tuple{AbstractString, Type{TriggerParameter}}","page":"APIs","title":"Base.read","text":"function read(filename::AbstractString, T::Type{TriggerParameter})\n\nReads the 'acousticstriggerparameters.txt' file.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#Base.read-Tuple{AbstractString, Type{Tripod}}","page":"APIs","title":"Base.read","text":"function read(filename:AbstractString, T::Type{Tripod})\n\nReads a vector of Tripods from an ASCII file.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#Base.read-Tuple{AbstractString, Type{Waveform}}","page":"APIs","title":"Base.read","text":"function read(filename::AbstractString, T::Type{Waveform})\n\nReads the waveform ASCII file.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#Base.read-Tuple{HDF5.File, Type{Toashort}, Int64}","page":"APIs","title":"Base.read","text":"function read(file::HDF5.File, T::Type{Toashort}, run::Int)\n\nReads a HDF5 file of toashorts.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#Base.write-Tuple{AbstractString, Vector{Tripod}}","page":"APIs","title":"Base.write","text":"function write(filename::AbstractString, tripods::Dict{Int8, Tripod})\n\nWrites the position of tripods out into an ASCII file.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#Base.write-Tuple{IO, Detector}","page":"APIs","title":"Base.write","text":"function write(io::IO, d::Detector; version=:same)\n\nWrites the detector to a DETX formatted file. The target version can be specified via the version keyword. Note that if converting to higher versions, missing parameters will be filled with reasonable default values. In case of downgrading, information will be lost.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics._extract_comments-Union{Tuple{T}, Tuple{Vector{T}, T}} where T<:AbstractString","page":"APIs","title":"KM3Acoustics._extract_comments","text":"function _extract_comments(lines<:Vector{AbstractString}, prefix<:AbstractString)\n\nReturns only the lines which are comments, identified by the prefix. The prefix is omitted.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.acoustic_event-NTuple{6, Any}","page":"APIs","title":"KM3Acoustics.acoustic_event","text":"function acoustic_event(detector, emitter, receivers, toe, run; p=0.8)\n\nSimulates an acoustic event from one emitter to the receivers. The receiver gets the signal with a probability of p. Returns a RawToashort.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.calc_pos-NTuple{5, Any}","page":"APIs","title":"KM3Acoustics.calc_pos","text":"function calc_traveltime(dx, dy, l, a, b, basepos, emitterpos)\n\nCalculates the position of a module located an some string at length l measured from the basemodule.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.calc_traveltime-NTuple{7, Any}","page":"APIs","title":"KM3Acoustics.calc_traveltime","text":"function calc_traveltime(dx, dy, l, a, b, basepos, emitterpos)\n\nCalculates the traveltime of a signal of an emitter to a module located at the position length l at some string.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.check_basemodules-Tuple{Any, Any}","page":"APIs","title":"KM3Acoustics.check_basemodules","text":"function check_modules!(receivers, detector, hydrophones)\n\nChecks if the modules in detector have hydrophones or piezos, if they have they will be written in receiver and emitters dicts.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.emitter_to_tripod-Tuple{Dict{Int8, Emitter}, Any}","page":"APIs","title":"KM3Acoustics.emitter_to_tripod","text":"function emitter_to_tripod(emitters::Dict{Int8, Emitter}, detector)\n\nTakes in a dictionary of emitters and returns a vector of tripods.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.generate_startvalues-NTuple{5, Any}","page":"APIs","title":"KM3Acoustics.generate_startvalues","text":"function generate_startvalues(hydrophones, emitters, fixhydrophones, fixemitters, fitevents)\n\nGenerates starting values for the fitting procedure. The startvalues are essentially some old positions of hydrophones and tripods. The start values for time of emission we take the mean TOE of an acoustic event.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.get_basemodules-Tuple{Any}","page":"APIs","title":"KM3Acoustics.get_basemodules","text":"function get_basemodules(modules, hydrophones)\n\nReturns all basemodules and positions.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.get_hydrophones-Tuple{AbstractString, Detector, Vector{Event}}","page":"APIs","title":"KM3Acoustics.get_hydrophones","text":"function get_hydrophones(filename::AbstractString, detector::Detector, events::Vector{Event})\n\nTakes in a filename relating to hydrophones, a detector file and events from eventbuilder. Outputs an ordered dictionary of hydrophones which are involved in some event and in detector.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.get_opt_modules-Tuple{Any, Any}","page":"APIs","title":"KM3Acoustics.get_opt_modules","text":"function get_opt_modules(p, pc)\n\nReturn two dictionaries of hydrophones and emitters, with precalibrated positions.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.group_events-Tuple{Vector{Event}}","page":"APIs","title":"KM3Acoustics.group_events","text":"Groups events during a certain time window. Within this time window there should be at least two events from different tripods.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.group_fitevents-Tuple{Vector{Event}, Any}","page":"APIs","title":"KM3Acoustics.group_fitevents","text":"function group_fitevents(events::Vector{Event}, nevents)\n\nGroups a vector of sorted events, by the emitters which send the event. nevents is the maximum number of events we use for fitting per emitter.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.hydrophoneenabled-Tuple{DetectorModule}","page":"APIs","title":"KM3Acoustics.hydrophoneenabled","text":"function hydrophonenabled(m::DetectorModule)\n\nReturn true if the hydrophone is enabled, false otherwise.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.init_realdetector-Tuple{Any, Any}","page":"APIs","title":"KM3Acoustics.init_realdetector","text":"function init_realdetector(basemodules, modules)\n\nInitializes an detector without calibration.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.init_toydetector-Tuple{Any, Any}","page":"APIs","title":"KM3Acoustics.init_toydetector","text":"function init_toydetector(basemodules, modules)\n\nInitializes an detector without calibration.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.inverse_waveforms-Tuple{Waveform}","page":"APIs","title":"KM3Acoustics.inverse_waveforms","text":"function inverse_waveforms(waveform::Waveform)\n\nReturn an inverse ( not injective ) map of the waveform.txt file.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.lookuptable_hydrophones-Tuple{OrderedCollections.OrderedDict{Int32, Hydrophone}}","page":"APIs","title":"KM3Acoustics.lookuptable_hydrophones","text":"function lookuptable_hydrophones(hydrophones::OrderedDict{Int32, Hydrophone}, key_fixhydro::Int32)\n\nReturns a dictionary which maps the keys to the position in which they are sorted. First key -> 1, second key -> 2, ..\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.natural-Tuple{Any, Any}","page":"APIs","title":"KM3Acoustics.natural","text":"function natural(x, y)\n\nFor sorting arrays of strings, including numbers in the strings. Usage: x = [\"Foo101\", \"Foo13\"] -> sort(x, lt=natural) -> [\"Foo13\", \"Foo101\"]\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.nthbitset-Tuple{Any, Any}","page":"APIs","title":"KM3Acoustics.nthbitset","text":"nthbitset(n, a) = !Bool((a >> (n - 1)) & 1)\n\nReturn true if the n-th bit of a is set, false otherwise.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.overlap-Tuple{Event, Event, Float64}","page":"APIs","title":"KM3Acoustics.overlap","text":"function overlap(A::Event, B::Event, tmax::Float64)\n\nCompares two events, which are already sorted by TOE, to check for overlap. If TOE of last signal of first event bigger than TOE of first signal of second event minus TMAX there is an overlap between signals.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.parse_runs-Tuple{Any}","page":"APIs","title":"KM3Acoustics.parse_runs","text":"function parse_runs(r)\n\nHelper function to parse runs in eventbuilder script.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.piezoenabled-Tuple{DetectorModule}","page":"APIs","title":"KM3Acoustics.piezoenabled","text":"function piezoenabled(m::DetectorModule)\n\nReturn true if the piezo is enabled, false otherwise.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.preprocess-Tuple{Any}","page":"APIs","title":"KM3Acoustics.preprocess","text":"function preprocess(raw_signals)\n\nCalculates UTC TOA and removes duplicate data.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.read_events-Tuple{AbstractString, Any}","page":"APIs","title":"KM3Acoustics.read_events","text":"function read_events(filename::AbstractString, run)\n\nReads in all events of a certain run from event.h5 file.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.read_events-Tuple{HDF5.File, Any}","page":"APIs","title":"KM3Acoustics.read_events","text":"function read(file::HDF5.File, T::Type{Event}, run)\n\nReads in all events of a certain run from event.h5 file.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.read_toa-Tuple{HDF5.File, Int64}","page":"APIs","title":"KM3Acoustics.read_toa","text":"function read_toa(filename::AbstractString, run::Int)\n\nActs as a function barrier. Opens the H5 File and reads the dataset for a specific group.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.rerotate_detector-Tuple{Any, Any, Any}","page":"APIs","title":"KM3Acoustics.rerotate_detector","text":"function rerotate_detector(hydrophones, emitters, ϕ)\n\nRotates the whole detector back to the originally position.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.rotate_detector-Tuple{Any, Any, Any}","page":"APIs","title":"KM3Acoustics.rotate_detector","text":"function rotate_detector(hydrophones, emitters, pos)\n\nRotates the whole detector, including hydrophones and emitters, such that the position which is given as an argument lies in yz plane.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.save_events-Tuple{Any, Any, Any}","page":"APIs","title":"KM3Acoustics.save_events","text":"function save_events(events)\n\nOutput events as HDF5 file.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.select_fitevents-Tuple{Any, Any}","page":"APIs","title":"KM3Acoustics.select_fitevents","text":"function select_fitevents(events, mask)\n\nSelects from the grouped events only certain events from different emitters.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.sort_fitevents-Tuple{Vector{Event}, Symbol}","page":"APIs","title":"KM3Acoustics.sort_fitevents","text":"function sort_events_qualityfactor(events::Vector{Event})\n\nSorts a vector of events. Events with highest mean qualityfactor come first.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.split_p-Tuple{Any, Precalibration}","page":"APIs","title":"KM3Acoustics.split_p","text":"function split_p(ps, hydrophones, emitters, numevents)\n\nSplits the arguments of the fitting function into position of hydrophones, emitters and TOEs.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.string_length-NTuple{5, Any}","page":"APIs","title":"KM3Acoustics.string_length","text":"function string_length(dx, dy, z, a, b)\n\nGiven the height of a module located in some string, calculates the length of the string from the basemodule to the module.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.toy_calc_pos-Tuple{Any, Any, Any}","page":"APIs","title":"KM3Acoustics.toy_calc_pos","text":"function toy_calc_pos(θ, ϕ, l)\n\nGiven the length of the string up to the module, returns the position of the module, relative to the basemodule\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.toy_calc_traveltime-NTuple{5, Any}","page":"APIs","title":"KM3Acoustics.toy_calc_traveltime","text":"function toy_calc_toa(θ, ϕ, l, basepos, emitterpos)\n\nGiven the length of the string up to the module, the angles of the strings, returns the traveltime between the given module and the emitter.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.traveltime-NTuple{4, Any}","page":"APIs","title":"KM3Acoustics.traveltime","text":"traveltime(R::Float64, z1::Float64, z2::Float64, z_reference::Float64)\n\nFor a given distance between to points and their heights, returns the time for an acoustic signal to travel between the points. Heights are referenced to z_reference.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.traveltime-Tuple{Any, Any, Any}","page":"APIs","title":"KM3Acoustics.traveltime","text":"traveltime(A, B, z_reference::Float64)\n\nFor a given module, tripod, emitter or receiver returns the time it takes for the signals to travel from the tripod to the module. The z positions are referenced to z_reference.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.traveltime-Tuple{Any, Any}","page":"APIs","title":"KM3Acoustics.traveltime","text":"function traveltime(A, B)\n\nFor a given module, tripod, emitter or receiver returns the time it takes for the signals to travel from the tripod to the module.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.traveltime-Tuple{Position, Position}","page":"APIs","title":"KM3Acoustics.traveltime","text":"function traveltime(x::Position, y::Position)\n\nGiven to Positions, returns the time for an acoustic signal to travel between positions.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.traveltime-Union{Tuple{T}, Tuple{Position{T}, Position{T}, Any}} where T<:Real","page":"APIs","title":"KM3Acoustics.traveltime","text":"function traveltime(x::Position, y::Position, z_reference::Float64)\n\nGiven to Positions, returns the time for an acoustic signal to travel between positions. Heights are referenced to z_reference.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.traveltime-Union{Tuple{T}, Tuple{T, T, T}} where T<:Real","page":"APIs","title":"KM3Acoustics.traveltime","text":"traveltime(R::Float64, z1::Float64, z2::Float64)\n\nFor a given distance between to points and their heights, returns the time for an acoustic signal to travel between the points.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.tripod_to_emitter-Tuple{Any, Any}","page":"APIs","title":"KM3Acoustics.tripod_to_emitter","text":"function tripod_to_emitter(tripods, detector)\n\nTripods position reference gets changed, such that the position is measured from the position of the detector. Returns a dictionary.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.unwrap-Union{Tuple{T}, Tuple{Vector{T}, Precalibration}} where T","page":"APIs","title":"KM3Acoustics.unwrap","text":"function unwrap(p, mapping, hydrophones, emitters)\n\nHelper function for mapping the arguments of the fitting function.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.velocity-Tuple{Any}","page":"APIs","title":"KM3Acoustics.velocity","text":"function get_velocity(T::DetectorModule; ref_soundvelocity=ref_soundvelocity, dv_dz=dv_dz)\n\nFor a given module or tripod returns the speed of sound at the depth of the module or tripod.\n\n\n\n\n\n","category":"method"},{"location":"internalapis/#KM3Acoustics.velocity-Tuple{T} where T<:Real","page":"APIs","title":"KM3Acoustics.velocity","text":"function get_velocity(z::T; ref_soundvelocity=ref_soundvelocity, dv_dz=dv_dz)\n\nFor a given depth z, returns the speed of sound at that depth.\n\n\n\n\n\n","category":"method"},{"location":"exampleusage/#Example-usage","page":"Example Usage","title":"Example usage","text":"","category":"section"},{"location":"#KM3Acoustics","page":"Introduction","title":"KM3Acoustics","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"(Image: Build Status) (Image: Coverage) (Image: Stable)","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"KM3Acoustics is a Julia package for the acoustic position calibration of the KM3NeT detectors. At the moment it is possible to reconstruct acoustic events and simulate acoustic events.","category":"page"},{"location":"#Usage","page":"Introduction","title":"Usage","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"KM3Acoustics.jl is not an official registered Julia package. The easiest way to way to use this package is to add the KM3NeT registry to your Julia registires. Just clone the following repository with","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"git clone https://git.km3net.de/common/julia-registry ~/.julia/registries/KM3NeT","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"then you can just use this package in the usual way. For example","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"julia> import Pkg; Pkg.add(\"KM3Acoustics\")","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"You can also visit the KM3NeT GitLab site for more information, about the KM3NeT Julia registry, with the following link","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"https://git.km3net.de/common/julia-registry/-/blob/main/README.md","category":"page"},{"location":"#Introduction","page":"Introduction","title":"Introduction","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"The most basic thing you need to calibrate a detector, is obviously the detector itself. The Detector struct is a type which stores   all the information from a .detx file. There is also a method that allows you to read in such a .detx file with the Detector struct.  This is done in the following way: ","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"   julia> using KM3Acoustics\n\n   julia> detector = Detector(filename)","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"From here it is easy to get access to for examples modules or the position of the detector.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"   julia> detector.pos","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Gives you the UTM position of the detector.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"   julia> detector.modules\n   julia> mod = detector.modules[808965918]","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Will return a dictionary where the keys represent the ID of a certain module and the value is the module itself.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"It is also possible to read in other basic modules with the read function. For example if you want to read in the  tripods, which are placed on the seabed. Here we defined a new data type called Emitter. The position of the emitters are referenced with respect to the detector coordinate system. ","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"   julia> emitters = read(filename, Emitter, detector)\n   julia> emitter7 = emitters[7]","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"From here you can calculate for example the time it takes for an acoustic signal to travel from a certain emitter to an module.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"   julia> t = traveltime(emitter7, mod, detector.pos.z)","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"The traveltime function takes in two modules, but also needs the depth of the detector, as the soundvelocity in water depends on the depth, and the z position of both the emitter and module is referenced with respect to the detector.","category":"page"}]
}