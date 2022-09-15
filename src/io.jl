struct PMT
    id::Int32
    pos::Position
    dir::Direction
    status::Int32
end


struct Location
    string::Int32
    floor::Int8
end


struct DetectorModule
    id::Int32
    pos::Union{Position, Missing}
    location::Location
    n_pmts::Int8
    q::Union{Quaternion, Missing}
    status::Union{Int32, Missing}
    t₀::Union{Float64, Missing}
end


struct Detector
    id::Int32
    validity::Union{DateRange, Missing}
    pos::Union{UTMPosition, Missing}
    n_modules::Int32
    modules::Dict{Int32, DetectorModule}
end


function Detector(filename::AbstractString)
    open(filename, "r") do fobj
        Detector(fobj)
    end
end


function Detector(io::IO)
    lines = readlines(io)
    filter!(e->!startswith(e, "#") && !isempty(strip(e)), lines)

    first_line = lowercase(first(lines))  # version can be v or V, halleluja

    if occursin("v", first_line)
        det_id, version = map(x->parse(Int,x), split(first_line, 'v'))
        n_modules = parse(Int, lines[4])
        idx = 5
    else
        det_id, n_modules = map(x->parse(Int,x), split(first_line))
        version = 1
        idx = 2
    end

    modules = Dict{Int32, DetectorModule}()

    for mod ∈ 1:n_modules
        elements = split(lines[idx])
        module_id, string, floor = map(x->parse(Int, x), elements[1:3])
        if version >= 4
            x, y, z, q0, qx, qy, qz, t₀ = map(x->parse(Float64, x), elements[4:12])
            pos = Position(x, y, z)
            q = Quaternion(q0, qx, qy, qz)
        else
            pos = missing
            q = missing
            t₀ = missing
        end
        if version >= 5
            status = parse(Float64, elements[13])
        else
            status = missing
        end
        n_pmts = parse(Int, elements[end])

        for pmt in 1:n_pmts
            l = split(lines[idx+pmt])
            pmt_id = parse(Int,first(l))
            x, y, z, dx, dy, dz = map(x->parse(Float64, x), l[2:7])
            t0 = parse(Float64,l[8])
            if version >= 3
                pmt_status = parse(Int, l[9])
            end
        end
        modules[module_id] = DetectorModule(module_id, pos, Location(string, floor), n_pmts, q, status, t₀)
        idx += n_pmts + 1
    end

    Detector(det_id, missing, missing, n_modules, modules)
end