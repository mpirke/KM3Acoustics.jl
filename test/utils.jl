using KM3Acoustics
using Test

const SAMPLES_DIR = joinpath(@__DIR__, "samples")


@testset "utils" begin
    mod = DetectorModule(1, UTMPosition(0, 0, 0), Location(0, 0), 0, PMT[], missing, 0, 0)
    @test hydrophoneenabled(mod)
    @test piezoenabled(mod)

    status = 1 << KM3Acoustics.MODULE_STATUS.PIEZO_DISABLE
    mod = DetectorModule(1, UTMPosition(0, 0, 0), Location(0, 0), 0, PMT[], missing, status, 0)
    @test !piezoenabled(mod)
    @test hydrophoneenabled(mod)

    status = 1 << KM3Acoustics.MODULE_STATUS.HYDROPHONE_DISABLE
    mod = DetectorModule(1, UTMPosition(0, 0, 0), Location(0, 0), 0, PMT[], missing, status, 0)
    @test piezoenabled(mod)
    @test !hydrophoneenabled(mod)

    status = (1 << KM3Acoustics.MODULE_STATUS.HYDROPHONE_DISABLE) | (1 << KM3Acoustics.MODULE_STATUS.PIEZO_DISABLE)
    mod = DetectorModule(1, UTMPosition(0, 0, 0), Location(0, 0), 0, PMT[], missing, status, 0)
    @test !piezoenabled(mod)
    @test !hydrophoneenabled(mod)

    @test ["Foo13", "Foo101"] == sort(["Foo101", "Foo13"], lt=natural)

    @test 42 == parse_runs("42")
    @test 42:47 == parse_runs("42:47")
    @test [42, 43, 47] == parse_runs("42,43,47")
end
