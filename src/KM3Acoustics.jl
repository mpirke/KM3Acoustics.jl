module KM3Acoustics

using Dates
import Base: read, isless
using LinearAlgebra
using Statistics
using StaticArrays
using WAV

using CSV
using DataFrames
using HDF5
# import DataStructures: DefaultDict

export
    Detector, Hydrophone, Tripod, Waveform, DetectorModule, PMT, Position, UTMPosition, Location,
    TriggerParameter,
    hydrophoneenabled, piezoenabled, write_compound,
    Quaternion, Direction,
    read,
    ASignal, to_wav,
    SoundVelocity, velocity, traveltime,
    read_toashort, Emitter, Receiver, Transmission, Event, isless, overlap, save_events



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
end
