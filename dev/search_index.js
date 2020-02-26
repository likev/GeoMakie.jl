var documenterSearchIndex = {"docs":
[{"location":"api/#The-GeoMakie-API-1","page":"API Reference","title":"The GeoMakie API","text":"","category":"section"},{"location":"api/#","page":"API Reference","title":"API Reference","text":"","category":"page"},{"location":"api/#","page":"API Reference","title":"API Reference","text":"Modules = [GeoMakie]","category":"page"},{"location":"api/#GeoMakie.AlbersEqualArea-Tuple{}","page":"API Reference","title":"GeoMakie.AlbersEqualArea","text":"AlbersEqualArea(; centrallongitude=0.0, centrallatitude=0.0,                  falseeasting=0.0, falsenorthing=0.0,                  standard_parallels=(20.0, 50.0)         )\n\nThis projection is conic and equal-area, and is commonly used for maps of the conterminous United States.\n\nParameters\n\ncentral_longitude:   The central longitude. Defaults to 0.\ncentral_latitude:   The central latitude. Defaults to 0.\nfalse_easting:   X offset from planar origin in metres. Defaults to 0.\nfalse_northing:   Y offset from planar origin in metres. Defaults to 0.\nstandard_parallels:   The one or two latitudes of correct scale. Defaults to (20, 50).\n\n\n\n\n\n","category":"method"},{"location":"api/#GeoMakie.LonLat-Tuple{}","page":"API Reference","title":"GeoMakie.LonLat","text":"LonLat()\n\nStandard latitude-longitude grid.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeoMakie.Mercator-Tuple{}","page":"API Reference","title":"GeoMakie.Mercator","text":"Mercator(; central_longitude=0.0,\n        latitude_true_scale=nothing, false_easting=0.0, false_northing=0.0,\n        scale_factor=nothing, units = \"m\")\n\nParameters\n\ncentral_longitude:  The central longitude. Defaults to 0.\nlatitude_true_scale:  The latitude where the scale is 1. Defaults to 0 degrees.\nfalse_easting:  X offset from the planar origin in metres. Defaults to 0.\nfalse_northing:  Y offset from the planar origin in metres. Defaults to 0.\nscale_factor:  Scale factor at natural origin. Defaults to unused.\n\nnote: Note\nOnly one of latitude_true_scale and scale_factor should be included.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeoMakie.Robinson-Tuple{}","page":"API Reference","title":"GeoMakie.Robinson","text":"Robinson(; central_longitude=0.0, false_easting=0.0, false_northing=0.0, units = \"m\")\n\nThe Robinson projection is the successor of the van der Grinten series of projections, and was created specifically for the purpose of world mapping.\n\nParameters\n\ncentral_longitude:   The central longitude. Defaults to 0.\nfalse_easting:   X offset from planar origin in metres. Defaults to 0.\nfalse_northing:   Y offset from planar origin in metres. Defaults to 0.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeoMakie.TransverseMercator-Tuple{}","page":"API Reference","title":"GeoMakie.TransverseMercator","text":"TransverseMercator(; central_longitude=0.0, central_latitude=0.0, false_easting=0.0, false_northing=0.0, scale_factor=1.0, units = \"m\")\n\nParameters\n\ncentral_longitude:   The true longitude of the central meridian in degrees.   Defaults to 0.\ncentral_latitude:   The true latitude of the planar origin in degrees. Defaults to 0.\nfalse_easting:   X offset from the planar origin in metres. Defaults to 0.\nfalse_northing:   Y offset from the planar origin in metres. Defaults to 0.\nscale_factor:   Scale factor at the central meridian. Defaults to 1.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeoMakie.UTM","page":"API Reference","title":"GeoMakie.UTM","text":"UTM(zone, southern_hemisphere=false; units = \"m\")\n\nParameters\n\nzone:     The numeric zone of the UTM required. southern_hemisphere:     Set to True if the zone is in the southern hemisphere. Defaults to     False.\n\n\n\n\n\n","category":"function"},{"location":"api/#GeoMakie.WinkelTripel-Tuple{}","page":"API Reference","title":"GeoMakie.WinkelTripel","text":"WinkelTripel(; centrallongitude = 0, firstparallel = 0, falseeasting=0,             falsenorthing=0, units = \"m\")\n\nThe Winkel tripel projection was the successor of the Robinson projection, and minimizes the triplet (tripel) of distortions: area, direction, and distance.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeoMakie.rec_point-Tuple{Array{#s40,1} where #s40<:AbstractFloat}","page":"API Reference","title":"GeoMakie.rec_point","text":"Recursively convert every element in the collection to a Point2f0.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeoMakie.rec_project-Tuple{Projection,Projection,Any}","page":"API Reference","title":"GeoMakie.rec_project","text":"Recurses through the given structure until it reaches a Point2f0, then projects it.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeoMakie.xygrid-Tuple{AbstractArray{#s45,1} where #s45<:Number,AbstractArray{#s46,1} where #s46<:Number}","page":"API Reference","title":"GeoMakie.xygrid","text":"xygrid(lons::Vector, lats::Vector; projection = LatLon()) -> (x::Matrix, y::Matrix)\n\nGenerates a grid of x and y coordinates in lat-lon space from the given ranges.\n\nOptionally, also projects them into the specified CRS before returning them.\n\nnote: Note\nMaterializing the matrices is necessary for C-interoperability, since passing the matrix to C implies that it can't be stored lazily and generated on the fly.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeoMakie.WilkinsonTicks","page":"API Reference","title":"GeoMakie.WilkinsonTicks","text":"WilkinsonTicks(; kwargs...)\n\nThis is basically Wilkinson's ad-hoc scoring method that tries to balance tight fit around the data, optimal number of ticks, and simple numbers.\n\nThis is the function which Plots.jl and Makie.jl use by default.\n\nKeyword Arguments\n\nextend_ticks\nDetermines whether to extend tick computation.  Defaults to false.\nstrict_span\nTrue if no ticks should be outside [x_min, x_max].  Defaults to true.\nQ\nA distribution of nice numbers from which labellings are sampled. Stored in the form (number, score).\n\nk_min\nThe minimum number of ticks.\nk_max\nThe maximum number of ticks.\nk_ideal\nThe ideal number of ticks.\ngranularity_weight\nEncourages returning roughly the number of labels requested.\n\nsimplicity_weight\nEncourages nicer labeling sequences by preferring step sizes that appear earlier in Q.\nAlso rewards labelings that include 0 as a way to ground the sequence.\n\ncoverage_weight\nEncourages labelings that do not extend far beyond the range of the data, penalizing unnecessary whitespace.\n\nniceness_weight\nEncourages labellings to produce nice ranges.\n\nMathematical details\n\nWilkinson’s optimization function is defined as the sum of three components. If the user requests m labels and a possible labeling has k labels, then the components are simplicity, coverage and granularity.\n\nThese components are defined as follows:\n\nbeginaligned\n  textsimplicity = 1 - fraciQ + fracvQ\n  textcoverage   = fracx_max - x_minmathrmlabel_max - mathrmlabel_min\n  textgranularity= 1 - fracleftk - mrightm\nendaligned\n\nand the variables here are:\n\nq: element of Q.\ni: index of q in Q.\nv: 1 if label range includes 0, 0 otherwise.\n\n\n\n\n\n","category":"type"},{"location":"api/#GeoMakie.grid_triangle_faces-Tuple{Any,Any}","page":"API Reference","title":"GeoMakie.grid_triangle_faces","text":"grid_triangle_faces(lats, lons)\n\nReturns a series of triangle indices from naive triangulation.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeoMakie.gridpoints-Tuple{Any,Any}","page":"API Reference","title":"GeoMakie.gridpoints","text":"gridpoints(xs, ys)\n\nReturns a Vector of Points of a grid formed by xs and ys.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeoMakie.imprecise-Tuple{Any}","page":"API Reference","title":"GeoMakie.imprecise","text":"imprecise(arr)\n\nReturns true if the polygon is invalid when converted to Float32, and false otherwise.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeoMakie.nonzero-Union{Tuple{GeometryTypes.Point{2,T}}, Tuple{T}} where T","page":"API Reference","title":"GeoMakie.nonzero","text":"nonzero(pt::GeometryTypes.Point{2, T}) where T\n\nReturns true if both of the elements are nonzero, and false otherwise.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeoMakie.toMeshes-Union{Tuple{Array{Array{Array{GeometryTypes.Point{2,T},1},1},1}}, Tuple{T}} where T","page":"API Reference","title":"GeoMakie.toMeshes","text":"toMeshes(mp::Vector{Vector{Vector{Point2}}})::Vector{GLNormalUVMesh}\ntoMeshes(p::Vector{Vector{Point2}})::Vector{GLNormalUVMesh}\n\nTakes in a polygon, or a multipolygon, and returns a vector of meshes (which may only contain one mesh).\n\n\n\n\n\n","category":"method"},{"location":"api/#GeoMakie.toPointVecs-Union{Tuple{T}, Tuple{T}} where T<:AbstractMultiPolygon","page":"API Reference","title":"GeoMakie.toPointVecs","text":"toPointVecs(mp::MultiPolygon)\n\nCreates a vector of vectors of Points from the given MultiPolygon. Returns a Vector{Vector{Point}}.\n\nwarning: Warning\nThere is no support for holes in this function at present; that will need to wait for GeometryBasics.jl to become complete, possibly replacing GeoInterface.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeoMakie.toPointVecs-Union{Tuple{T}, Tuple{T}} where T<:AbstractPolygon","page":"API Reference","title":"GeoMakie.toPointVecs","text":"toPointVecs(poly::Polygon)\n\nCreates a vector of Points from the given polygon. Returns a Vector{Vector{Point}}, with one element.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeoMakie.to_nansep_vec-Union{Tuple{T}, Tuple{Function,AbstractArray{T,1}}, Tuple{Function,AbstractArray{T,1},Any}} where T","page":"API Reference","title":"GeoMakie.to_nansep_vec","text":"to_nansep_vec([f::Function,] data::Vector{Vector{T}}) where T\n\nFlattens the given Vector of Vectors into a single Vector, while inserting NaN separations between each individual sub- vector.\n\nIf f is given, then f will be executed on each subvector before it is merged into the main vector.  If it is not, the data will remain unchanged.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeoMakie.triangulated_grid-Tuple{Any,Any}","page":"API Reference","title":"GeoMakie.triangulated_grid","text":"triangulated_grid(xs, ys) -> points, faces\n\nTakes in two ranges, and returns a triangulated regular grid based on those ranges.\n\n\n\n\n\n","category":"method"},{"location":"api/#GeoMakie.wrap_lon-Tuple{Any}","page":"API Reference","title":"GeoMakie.wrap_lon","text":"wrap_lon(x)\n\nWraps the input longitude (or Vector of longitudes) into the domain (-180, 180).\n\n\n\n\n\n","category":"method"},{"location":"api/#Proj4._transform!-Tuple{Ptr{Nothing},Ptr{Nothing},Integer,Integer,Union{Ptr{Float64}, Array{Float64,1}},Union{Ptr{Float64}, Array{Float64,1}},Union{Ptr{Float64}, Array{Float64,1}}}","page":"API Reference","title":"Proj4._transform!","text":"Low level interface to libproj transform, C_NULL can be passed in for z, if it's 2-dimensional\n\n\n\n\n\n","category":"method"},{"location":"stock/#Stock-data-1","page":"Stock data","title":"Stock data","text":"","category":"section"},{"location":"stock/#","page":"Stock data","title":"Stock data","text":"GeoMakie offers coastlines and an image of the Earth (both from Natural Earth) as pre-loaded datasets, which you can plot using coastlines or earth:","category":"page"},{"location":"stock/#","page":"Stock data","title":"Stock data","text":"coastlines\nearth","category":"page"},{"location":"README/#GeoMakie-1","page":"Home","title":"GeoMakie","text":"","category":"section"},{"location":"README/#Geographic-plotting-utilities-for-a-href-\"https://www.github.com/JuliaPlots/Makie.jl\"img-src\"https://raw.githubusercontent.com/JuliaPlots/Makie.jl/master/assets/logo.png\"-alt\"Makie.jl\"-height\"30\"-align-\"top\"/a-1","page":"Home","title":"Geographic plotting utilities for <a href = \"https://www.github.com/JuliaPlots/Makie.jl\"><img src=\"https://raw.githubusercontent.com/JuliaPlots/Makie.jl/master/assets/logo.png\" alt=\"Makie.jl\" height=\"30\" align = \"top\"></a>","text":"","category":"section"},{"location":"README/#","page":"Home","title":"Home","text":"(Image: Stable) (Image: Dev) (Image: Build Status)","category":"page"},{"location":"README/#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"README/#","page":"Home","title":"Home","text":"This package is in development and will break often.  As it is currently unregistered, you can install it from the REPL like so:","category":"page"},{"location":"README/#","page":"Home","title":"Home","text":"]add https://github.com/JuliaPlots/GeoMakie.jl","category":"page"},{"location":"README/#Examples-1","page":"Home","title":"Examples","text":"","category":"section"},{"location":"README/#","page":"Home","title":"Home","text":"using GeoMakie, Makie\n\nlons = LinRange(-179.5, 179.5, 360)\nlats = LinRange(-89.5, 89.5, 180)\n\nfield = [exp(cosd(l)) + 3(y/90) for l in lons, y in lats]\n\nsource = LonLat()\ndest = WinkelTripel()\n\nxs, ys = xygrid(lons, lats)\nProj4.transform!(source, dest, vec(xs), vec(ys))\n\nscene = surface(xs, ys; color = field, shading = false, show_axis = false, scale_plot = false)\n\ngeoaxis!(scene, -180, 180, -90, 90; crs = (src = source, dest = dest,))\n\ncoastlines!(scene; crs = (src = source, dest = dest,))","category":"page"},{"location":"README/#","page":"Home","title":"Home","text":"(Image: simple)","category":"page"},{"location":"README/#","page":"Home","title":"Home","text":"These plots can be arbitrarily colored using the color keyword, and the full Makie interface is also exposed.","category":"page"},{"location":"README/#","page":"Home","title":"Home","text":"Check the examples in the test folder for more recent examples of usage.","category":"page"},{"location":"README/#Performance-1","page":"Home","title":"Performance","text":"","category":"section"},{"location":"README/#","page":"Home","title":"Home","text":"We use Earcut.jl for added performance when converting polygons to triangular meshes; it decreases time to mesh by an order of magnitude from the Makie implementation.","category":"page"},{"location":"README/#","page":"Home","title":"Home","text":"Since surface has an optimized shader, and can accept matrices of deformed grid points, it's heavily recommended to use it (or mesh if you need the flexibility) over poly.","category":"page"},{"location":"README/#Planned-features-1","page":"Home","title":"Planned features","text":"","category":"section"},{"location":"README/#","page":"Home","title":"Home","text":"A choropleth recipe which can read data from the properties of a FeatureCollection\nhelper functions to extract \"columns\" of a FeatureCollection","category":"page"},{"location":"README/#More-examples-1","page":"Home","title":"More examples","text":"","category":"section"},{"location":"README/#","page":"Home","title":"Home","text":"using GeoJSON, GeoMakie, Makie\nstates = download(\"https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json\")\n\nstates_geo = GeoJSON.parse(read(states, String))\n\npoly(states_geo, strokecolor = :blue, strokewidth = 1)","category":"page"},{"location":"README/#","page":"Home","title":"Home","text":"(Image: US simple example)","category":"page"},{"location":"geoaxis/#GeoAxis-1","page":"GeoAxis","title":"GeoAxis","text":"","category":"section"},{"location":"geoaxis/#","page":"GeoAxis","title":"GeoAxis","text":"The GeoAxis is simply an axis which can be transformed geographically.","category":"page"},{"location":"geoaxis/#","page":"GeoAxis","title":"GeoAxis","text":"AbstractPlotting.geoaxis","category":"page"}]
}
