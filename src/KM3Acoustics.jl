module KM3Acoustics

using Dates
import Base: read, isless
using LinearAlgebra
using Statistics
using StaticArrays

using HDF5
import DataStructures: DefaultDict
using Roots

export
    Detector, Hydrophone, Tripod, Waveform, DetectorModule, PMT, Position, UTMPosition, Location,
    TriggerParameter,
    hydrophoneenabled, piezoenabled, write_compound, natural, parse_runs,
    Quaternion, Direction,
    read,
    ASignal,
    SoundVelocity, velocity, traveltime,
    read_toashort, Toashort, Emitter, tripod_to_emitter, Receiver, Transmission, Event, isless, overlap, save_events,
    read_events, group_events, eventtime, get_basemodules, ToyStringCalibration, StringCalibration,
    init_toydetector, init_realdetector,
    ToyString, ToyModule, ToyDetector, toy_calc_pos, toy_calc_traveltime, string_length, string_inverselength, calc_pos, calc_traveltime

for inc ∈ readdir(joinpath(@__DIR__, "definitions"), join=true)
    !endswith(inc, ".jl") && continue
    include(inc)
end

include("types.jl")
include("tools.jl")
include("io.jl")
include("utils.jl")
include("acoustics.jl")
include("soundvelocity.jl")
include("eventbuilder.jl")
include("geometry.jl")
include("calibration.jl")
end
