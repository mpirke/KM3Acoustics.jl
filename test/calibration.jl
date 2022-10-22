using KM3Acoustics
using Test
using HDF5

const SAMPLES_DIR = joinpath(@__DIR__, "samples")

@testset "calibration" begin
    events = read_events(joinpath(SAMPLES_DIR, "KM3NeT_00000049_00011190_event.h5"), 11190)
    @test 49 == events[1].oid
    @test 11190 == events[1].run
    @test 102 == length(events[1])
    @test 809503416 == events[1].data[1].id
    @test 308 == length(events)
    events = h5open(joinpath(SAMPLES_DIR, "KM3NeT_00000049_00011190_event.h5"), "r") do h5f
        read_events(h5f, 11190)
    end
    @test 49 == events[1].oid
    @test 11190 == events[1].run
    @test 102 == length(events[1])
    @test 809503416 == events[1].data[1].id
    @test 308 == length(events)

    gevents = group_events(events)
    @test 13 == length(gevents)
    @test 23 == length(gevents[1])
    @test 49 == gevents[1][1].oid
    @test 11190 == gevents[1][1].run
    @test 101 == gevents[1][1].length
    @test 3 == gevents[1][1].id
    @test 808960332 == gevents[1][1].data[1].id

    @test 1.6358896064384315e9 ≈ eventtime(events[1])
end