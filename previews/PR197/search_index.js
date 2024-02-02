var documenterSearchIndex = {"docs":
[{"location":"geostationary_image/","page":"Geostationary satellite image","title":"Geostationary satellite image","text":"EditURL = \"../../examples/geostationary_image.jl\"","category":"page"},{"location":"geostationary_image/","page":"Geostationary satellite image","title":"Geostationary satellite image","text":"using Makie, GeoMakie, CairoMakie\nusing Downloads, FileIO","category":"page"},{"location":"geostationary_image/","page":"Geostationary satellite image","title":"Geostationary satellite image","text":"Download a geostationary satellite image","category":"page"},{"location":"geostationary_image/","page":"Geostationary satellite image","title":"Geostationary satellite image","text":"img = rotr90(FileIO.load(Downloads.download(\"https://gist.github.com/pelson/5871263/raw/EIDA50_201211061300_clip2.png\")))\nimage(img)","category":"page"},{"location":"geostationary_image/","page":"Geostationary satellite image","title":"Geostationary satellite image","text":"then, plot the figure etc","category":"page"},{"location":"geostationary_image/","page":"Geostationary satellite image","title":"Geostationary satellite image","text":"fig = Figure()\nga = GeoAxis(fig[1, 1]; dest = \"+proj=natearth\")\nlines!(ga, GeoMakie.coastlines())\n\nga.title[] = \"Image from geostationary satellite\" # this doesn't do anything - yet!","category":"page"},{"location":"geostationary_image/#Surface-could-be-used-as-well-but-is-slower!","page":"Geostationary satellite image","title":"Surface could be used as well but is slower!","text":"","category":"section"},{"location":"geostationary_image/","page":"Geostationary satellite image","title":"Geostationary satellite image","text":"surface!(     ga,     -5500000..5500000, -5500000..5500000, # the bounding box in input space for the image     ones(size(img)...); # dummy points to create the surface     color = img,     source = \"+proj=geos +h=35786000\" )","category":"page"},{"location":"geostationary_image/","page":"Geostationary satellite image","title":"Geostationary satellite image","text":"meshimage!(ga,\n    -5500000 .. 5500000, -5500000 .. 5500000, img;\n    source=\"+proj=geos +h=35786000\",\n    npoints=100\n)\nfig","category":"page"},{"location":"geostationary_image/","page":"Geostationary satellite image","title":"Geostationary satellite image","text":"","category":"page"},{"location":"geostationary_image/","page":"Geostationary satellite image","title":"Geostationary satellite image","text":"This page was generated using Literate.jl.","category":"page"},{"location":"field_and_countries/","page":"Field and countries","title":"Field and countries","text":"EditURL = \"../../examples/field_and_countries.jl\"","category":"page"},{"location":"field_and_countries/","page":"Field and countries","title":"Field and countries","text":"This example was taken from Lazaro Alonso's BeautifulMakie.jl repository.  It has some really good stuff - check it out!","category":"page"},{"location":"field_and_countries/","page":"Field and countries","title":"Field and countries","text":"using Makie, CairoMakie, GeoMakie\nimport Downloads\nusing GeoMakie.GeoJSON\nusing GeometryBasics\nusing GeoMakie.GeoInterface","category":"page"},{"location":"field_and_countries/","page":"Field and countries","title":"Field and countries","text":"https://datahub.io/core/geo-countries#curl # download data from here","category":"page"},{"location":"field_and_countries/","page":"Field and countries","title":"Field and countries","text":"path = GeoMakie.assetpath(\"vector\", \"countries.geo.json\")\njson_str = read(path, String)\nworldCountries = GeoJSON.read(json_str)\nn = length(worldCountries)\nlons = -180:180\nlats = -90:90\nfield = [exp(cosd(l)) + 3(y/90) for l in lons, y in lats]\n\nfig = Figure(size = (1200,800), fontsize = 22)\n\nax = GeoAxis(\n    fig[1,1];\n    dest=\"+proj=wintri\",\n    title = \"World Countries\",\n    tellheight = true,\n)\n\nhm1 = surface!(ax, lons, lats, field; shading = NoShading)\ntranslate!(hm1, 0, 0, -10)\n\nhm2 = poly!(\n    ax, worldCountries;\n    color= 1:n,\n    colormap = Reverse(:plasma),\n    strokecolor = :black,\n    strokewidth = 0.25\n)\n\ncb = Colorbar(fig[1,2]; colorrange = (1, n), colormap = Reverse(:plasma), label = \"variable, color code\", height = Relative(0.65))\n\nfig","category":"page"},{"location":"field_and_countries/","page":"Field and countries","title":"Field and countries","text":"","category":"page"},{"location":"field_and_countries/","page":"Field and countries","title":"Field and countries","text":"This page was generated using Literate.jl.","category":"page"},{"location":"new/","page":"New API","title":"New API","text":"EditURL = \"../../examples/new.jl\"","category":"page"},{"location":"new/","page":"New API","title":"New API","text":"Example of the new API","category":"page"},{"location":"new/","page":"New API","title":"New API","text":"using Makie, GeoMakie # add your preferred backend here","category":"page"},{"location":"new/","page":"New API","title":"New API","text":"GeoAxis is a Block object, just like Axis or Axis3, with the same semantics.","category":"page"},{"location":"new/","page":"New API","title":"New API","text":"You can insert it into a figure in the same way, or specify it when plotting as plot(...; axis = (; type = GeoAxis, geoaxis_kwargs...)).","category":"page"},{"location":"new/","page":"New API","title":"New API","text":"fig = Figure()\nga = GeoAxis(fig[1, 1]; dest = \"+proj=ortho +lon_0=19 +lat_0=50\")\nlines!(ga, GeoMakie.coastlines())\nfig","category":"page"},{"location":"new/","page":"New API","title":"New API","text":"This is an orthographic projection, note how it shows the pole as well!","category":"page"},{"location":"new/","page":"New API","title":"New API","text":"surface!(ga, -180..180, -90..90, rand(100, 100))\nfig","category":"page"},{"location":"new/","page":"New API","title":"New API","text":"You can plot any Makie plot type into the GeoAxis - there is no difference between it and any other axis-like object in Makie. Beware that some plot types will create points which cannot support transformations, though!","category":"page"},{"location":"new/","page":"New API","title":"New API","text":"If you encounter this kind of issue, please file a GitHub issue at the GeoMakie.jl repo!","category":"page"},{"location":"new/","page":"New API","title":"New API","text":"","category":"page"},{"location":"new/","page":"New API","title":"New API","text":"This page was generated using Literate.jl.","category":"page"},{"location":"basic/","page":"Basic examples","title":"Basic examples","text":"EditURL = \"../../examples/basic.jl\"","category":"page"},{"location":"basic/","page":"Basic examples","title":"Basic examples","text":"using GeoMakie\n\nlons = -180:180\nlats = -90:90","category":"page"},{"location":"basic/","page":"Basic examples","title":"Basic examples","text":"Create some field of values across lons and lats This grid can be of any density, but note that the time it takes to plot scales with the grid size!","category":"page"},{"location":"basic/","page":"Basic examples","title":"Basic examples","text":"field = [exp(cosd(l)) + 3(y/90) for l in lons, y in lats]\nusing GLMakie\nGLMakie.activate!(float=true)","category":"page"},{"location":"basic/","page":"Basic examples","title":"Basic examples","text":"Surface example","category":"page"},{"location":"basic/","page":"Basic examples","title":"Basic examples","text":"fig = Figure()\nax = GeoAxis(fig[1,1])\nsp = surface!(ax, lons, lats, field; shading = NoShading)\nfig","category":"page"},{"location":"basic/","page":"Basic examples","title":"Basic examples","text":"To save, run e.g. save(\"surf_example.png\", fig; px_per_unit=2).","category":"page"},{"location":"basic/","page":"Basic examples","title":"Basic examples","text":"Scatter example","category":"page"},{"location":"basic/","page":"Basic examples","title":"Basic examples","text":"slons = rand(lons, 2000)\nslats = rand(lats, 2000)\nsfield = [exp(cosd(l)) + 3(y/90) for (l,y) in zip(slons, slats)]\n\nfig = Figure()\nax = GeoAxis(fig[1,1])\nscatter!(slons, slats; color = sfield)\nfig","category":"page"},{"location":"basic/","page":"Basic examples","title":"Basic examples","text":"To save, run e.g. save(\"scatter_example.png\", fig; px_per_unit=2).","category":"page"},{"location":"basic/","page":"Basic examples","title":"Basic examples","text":"","category":"page"},{"location":"basic/","page":"Basic examples","title":"Basic examples","text":"This page was generated using Literate.jl.","category":"page"},{"location":"orthographic/","page":"Orthographic projection","title":"Orthographic projection","text":"EditURL = \"../../examples/orthographic.jl\"","category":"page"},{"location":"orthographic/","page":"Orthographic projection","title":"Orthographic projection","text":"using GeoMakie, CairoMakie\n\nlons = -180:180\nlats = -90:90\nfield = [exp(cosd(l)) + 3(y/90) for l in lons, y in lats]\n\nfig = Figure()\nga = GeoAxis(\n    fig[1, 1],\n    dest=\"+proj=ortho\",\n    title = \"Orthographic projection\",\n    xticklabelcolor=:red, xgridcolor=:red,\n    aspect=nothing,\n)\nlp = lines!(ga, GeoMakie.coastlines(); transformation = (; translation = (0, 0, 1)))\nsp = surface!(ga, lons, lats, zeros(size(field)); color=field, shading = NoShading, colormap=:rainbow_bgyrm_35_85_c69_n256)\ncb = Colorbar(fig[1, 2], sp)\nfig","category":"page"},{"location":"orthographic/","page":"Orthographic projection","title":"Orthographic projection","text":"","category":"page"},{"location":"orthographic/","page":"Orthographic projection","title":"Orthographic projection","text":"This page was generated using Literate.jl.","category":"page"},{"location":"contourf/","page":"Contourf","title":"Contourf","text":"EditURL = \"../../examples/contourf.jl\"","category":"page"},{"location":"contourf/","page":"Contourf","title":"Contourf","text":"using Makie, GeoMakie, CairoMakie\n\nlons = -180:180\nlats = -90:90","category":"page"},{"location":"contourf/","page":"Contourf","title":"Contourf","text":"Create some field of values across lons and lats This grid can be of any density, but note that the time it takes to plot scales with the grid size!","category":"page"},{"location":"contourf/","page":"Contourf","title":"Contourf","text":"field = [exp(cosd(l)) + 3(y/90) for l in lons, y in lats]","category":"page"},{"location":"contourf/","page":"Contourf","title":"Contourf","text":"Surface example","category":"page"},{"location":"contourf/","page":"Contourf","title":"Contourf","text":"fig = Figure()\nax = GeoAxis(fig[1,1])\ncontourf!(ax, lons, lats, field)\nfig","category":"page"},{"location":"contourf/","page":"Contourf","title":"Contourf","text":"","category":"page"},{"location":"contourf/","page":"Contourf","title":"Contourf","text":"This page was generated using Literate.jl.","category":"page"},{"location":"rotating_earth/","page":"-","title":"-","text":"EditURL = \"../../examples/rotating_earth.jl\"","category":"page"},{"location":"rotating_earth/","page":"-","title":"-","text":"using Makie, CairoMakie, GeoMakie\n\ndestnode = Observable(\"+proj=ortho\")\n\nfig = Figure()\nga = GeoAxis(\n    fig[1, 1],\n    dest = destnode,\n)\nsurface!(ga, -180 .. 180, -90 .. 90, zeros(128, 128); color=rotr90(GeoMakie.earth()), interpolate = false)\nfig\n\nrecord(fig, \"rotating_earth_ortho.mp4\"; framerate=30) do io\n    for lon in -90:0.5:90\n        ga.title[] = string(lon) * \"°\"\n        destnode[] = \"+proj=ortho +lon_0=$lon\"\n        recordframe!(io)\n    end\nend","category":"page"},{"location":"rotating_earth/","page":"-","title":"-","text":"(Image: )","category":"page"},{"location":"rotating_earth/","page":"-","title":"-","text":"","category":"page"},{"location":"rotating_earth/","page":"-","title":"-","text":"This page was generated using Literate.jl.","category":"page"},{"location":"world_population/","page":"World Population centers","title":"World Population centers","text":"EditURL = \"../../examples/world_population.jl\"","category":"page"},{"location":"world_population/","page":"World Population centers","title":"World Population centers","text":"This example was contributed by Martijn Visser (@visr)","category":"page"},{"location":"world_population/","page":"World Population centers","title":"World Population centers","text":"using Makie, CairoMakie, GeoMakie\nusing GeoMakie: GeoJSON\nusing GeometryBasics\nusing Downloads\n\nsource = \"+proj=longlat +datum=WGS84\"\ndest = \"+proj=natearth2\"\n\nland = GeoMakie.assetpath(\"ne_110m_land.geojson\")\nland_geo = GeoJSON.read(read(land, String))\npop = GeoMakie.assetpath(\"ne_10m_populated_places_simple.geojson\")\npop_geo = GeoJSON.read(read(pop, String))\n\nbegin\n    fig = Figure(size = (1000,500))\n    ga = GeoAxis(\n        fig[1, 1];\n        source = source,\n        dest = dest\n    )\n\n    ga.xticklabelsvisible[] = false\n    ga.yticklabelsvisible[] = false\n    poly!(ga, land_geo, color=:black)\n    popisqrt = map(pop_geo) do geo\n        popi = geo.pop_max\n        popi > 0 ? sqrt(popi) : 0.0\n    end\n    mini, maxi = extrema(popisqrt)\n    msize = map(popisqrt) do popi\n        normed = (popi .- mini) ./ (maxi - mini)\n        return (normed * 20) .+ 1\n    end\n    scatter!(ga, pop_geo; color=popisqrt, markersize=msize)\n    fig\nend","category":"page"},{"location":"world_population/","page":"World Population centers","title":"World Population centers","text":"","category":"page"},{"location":"world_population/","page":"World Population centers","title":"World Population centers","text":"This page was generated using Literate.jl.","category":"page"},{"location":"nonlinear_transforms/","page":"Nonlinear transforms","title":"Nonlinear transforms","text":"using Makie, CairoMakie, GeoMakie\nusing Makie.FileIO","category":"page"},{"location":"nonlinear_transforms/#Nonlinear-transformations","page":"Nonlinear transforms","title":"Nonlinear transformations","text":"","category":"section"},{"location":"nonlinear_transforms/#What-are-they?","page":"Nonlinear transforms","title":"What are they?","text":"","category":"section"},{"location":"nonlinear_transforms/","page":"Nonlinear transforms","title":"Nonlinear transforms","text":"Nonlinear transformations take many forms.  Some are simply \"projections\" like perspective or orthographic, which are linear in some dimension (representable by a matrix).  Then you have things like log-scale axes, geographic projections, and esoteric physics stuff (like the space near a black hole).","category":"page"},{"location":"nonlinear_transforms/","page":"Nonlinear transforms","title":"Nonlinear transforms","text":"When dealing with nonlinear transformations, it's useful to define our terminology.  Spaces are coordinate spaces, and we consider two relevant ones:","category":"page"},{"location":"nonlinear_transforms/","page":"Nonlinear transforms","title":"Nonlinear transforms","text":"Data space is the space before transformation, also called the input space.\nTransformed space is the space after transformation is applied.  This can be transformed directly to pixel space by an affine, linear transform.","category":"page"},{"location":"nonlinear_transforms/","page":"Nonlinear transforms","title":"Nonlinear transforms","text":"I can categorize all nonlinear transforms into three types:","category":"page"},{"location":"nonlinear_transforms/#Affine","page":"Nonlinear transforms","title":"Affine","text":"","category":"section"},{"location":"nonlinear_transforms/","page":"Nonlinear transforms","title":"Nonlinear transforms","text":"Any affine transform is not actually nonlinear, but a simple combination of translation, scale and rotation.  They are explained quite well in this StackOverflow question.","category":"page"},{"location":"nonlinear_transforms/","page":"Nonlinear transforms","title":"Nonlinear transforms","text":"We don't really consider affine transforms nonlinear here, since they are more or less linear.  But these are the transformations which you generate when you call translate!, rotate!, or scale!.  In these transformations, a straight line is still straight.","category":"page"},{"location":"nonlinear_transforms/","page":"Nonlinear transforms","title":"Nonlinear transforms","text":"meshimage(rotr90(Makie.logo()))","category":"page"},{"location":"nonlinear_transforms/#Nonlinear-but-separable","page":"Nonlinear transforms","title":"Nonlinear but separable","text":"","category":"section"},{"location":"nonlinear_transforms/","page":"Nonlinear transforms","title":"Nonlinear transforms","text":"Here, I mean separable in the sense that systems of ODEs can be separable.  Specifically, nonlinear and separable transforms have the property that each coordinate is independent of all others.  This means that the x-coordinate in transformed space depends only on the x-coordinate in input space, and so on and so forth for the y and z coordinates.","category":"page"},{"location":"nonlinear_transforms/","page":"Nonlinear transforms","title":"Nonlinear transforms","text":"meshimage(\n    1..size(Makie.logo(), 2), 1..size(Makie.logo(), 1),\n    rotr90(Makie.logo());\n    axis = (; xscale = log, yscale = log10)\n)","category":"page"},{"location":"nonlinear_transforms/#Examples","page":"Nonlinear transforms","title":"Examples","text":"","category":"section"},{"location":"nonlinear_transforms/#Nonlinear-and-inseparable","page":"Nonlinear transforms","title":"Nonlinear and inseparable","text":"","category":"section"},{"location":"nonlinear_transforms/","page":"Nonlinear transforms","title":"Nonlinear transforms","text":"Geographic projections are prime examples of this.  The x-coordinate in transformed space depends on the input x and y coordinates, as does the the y-coordinate in transformed space.","category":"page"},{"location":"nonlinear_transforms/","page":"Nonlinear transforms","title":"Nonlinear transforms","text":"meshimage(\n    -180..180,\n    -90..90,\n    Makie.logo();\n    axis = (; type = GeoAxis, dest = \"+proj=igh\")\n)","category":"page"},{"location":"nonlinear_transforms/#Examples-2","page":"Nonlinear transforms","title":"Examples","text":"","category":"section"},{"location":"nonlinear_transforms/#Geographic-plots","page":"Nonlinear transforms","title":"Geographic plots","text":"","category":"section"},{"location":"nonlinear_transforms/#The-space-near-a-black-hole","page":"Nonlinear transforms","title":"The space near a black hole","text":"","category":"section"},{"location":"nonlinear_transforms/#Special-situations","page":"Nonlinear transforms","title":"Special situations","text":"","category":"section"},{"location":"nonlinear_transforms/#Input-v/s-transformed-bounding-boxes","page":"Nonlinear transforms","title":"Input v/s transformed bounding boxes","text":"","category":"section"},{"location":"nonlinear_transforms/","page":"Nonlinear transforms","title":"Nonlinear transforms","text":"The bounding box in transformed space directly maps to that in pixel space, and so must be a rectangle by virtue of its nature.","category":"page"},{"location":"nonlinear_transforms/","page":"Nonlinear transforms","title":"Nonlinear transforms","text":"However, in input space, this is not necessarily the case.  Consider the following GeoAxis:","category":"page"},{"location":"nonlinear_transforms/","page":"Nonlinear transforms","title":"Nonlinear transforms","text":"fig = Figure()\nga = GeoAxis(fig[1, 1]; dest = \"+proj=ortho +lon_0=19 +lat_0=50\")\nlines!(ga, GeoMakie.coastlines())\nfig","category":"page"},{"location":"nonlinear_transforms/","page":"Nonlinear transforms","title":"Nonlinear transforms","text":"If we look at the grid of lon/lat values which are valid in transformed space,","category":"page"},{"location":"nonlinear_transforms/","page":"Nonlinear transforms","title":"Nonlinear transforms","text":"lons = LinRange(-180, 180, 500)\nlats = LinRange(-90, 90, 500)\n\nvalid_points = [isfinite(Makie.apply_transform(ga.transform_func[], Point2f(lon, lat))) for lon in lons, lat in lats]\n\nf, a, p = heatmap(\n    lons, lats, valid_points;\n    axis = (; aspect = DataAspect(), xlabel = \"Longitudes\", ylabel = \"Latitudes\")\n)\nLegend(f[2, 1], [PolyElement(color = first(to_colormap(p.colormap[]))), PolyElement(color = last(to_colormap(p.colormap[])))], [\"Invalid (invisible)\", \"Valid (visible)\"], tellheight = true, tellwidth = false)\nf","category":"page"},{"location":"nonlinear_transforms/","page":"Nonlinear transforms","title":"Nonlinear transforms","text":"You can see that if we were to try to find a bounding box, it would either be too small (excluding the bulge at the middle) or too large (including some invalid regions).","category":"page"},{"location":"nonlinear_transforms/#Coordinate-singularities","page":"Nonlinear transforms","title":"Coordinate singularities","text":"","category":"section"},{"location":"axis_config/","page":"Axis configuration","title":"Axis configuration","text":"EditURL = \"../../examples/axis_config.jl\"","category":"page"},{"location":"axis_config/","page":"Axis configuration","title":"Axis configuration","text":"How to mess with GeoAxis","category":"page"},{"location":"axis_config/","page":"Axis configuration","title":"Axis configuration","text":"warning: Warning\nThis was written for the old API and doesn't work for the new one!","category":"page"},{"location":"axis_config/","page":"Axis configuration","title":"Axis configuration","text":"using Makie, CairoMakie, GeoMakie\n\nfig = Figure(size = (500,1000))","category":"page"},{"location":"axis_config/","page":"Axis configuration","title":"Axis configuration","text":"GeoAxis defaults to DataAspect() Set source projection and destination projection source can be overwritten per plot","category":"page"},{"location":"axis_config/","page":"Axis configuration","title":"Axis configuration","text":"ax1 = GeoAxis(fig[1, 1]; aspect=nothing, source=\"+proj=latlong\", dest=\"+proj=ortho\")\nxlims!(ax1, -90, 90) # xlims!, ylims! and limits! are supported","category":"page"},{"location":"axis_config/","page":"Axis configuration","title":"Axis configuration","text":"But supports any other Makie aspect ratio","category":"page"},{"location":"axis_config/","page":"Axis configuration","title":"Axis configuration","text":"ax2 = GeoAxis(fig[2, 1]; aspect=AxisAspect(1.3), xgridstyle=:dashdot, xgridcolor = :blue,\n              ygridcolor=(:orange, 0.5), ygridwidth=5.0)","category":"page"},{"location":"axis_config/","page":"Axis configuration","title":"Axis configuration","text":"axis 3 - customizing ticks","category":"page"},{"location":"axis_config/","page":"Axis configuration","title":"Axis configuration","text":"ax2 = GeoAxis(fig[3, 1]; xticks = -180:2:180)\nfig","category":"page"},{"location":"axis_config/","page":"Axis configuration","title":"Axis configuration","text":"","category":"page"},{"location":"axis_config/","page":"Axis configuration","title":"Axis configuration","text":"This page was generated using Literate.jl.","category":"page"},{"location":"meshimage/","page":"Mesh image recipe","title":"Mesh image recipe","text":"EditURL = \"../../examples/meshimage.jl\"","category":"page"},{"location":"meshimage/","page":"Mesh image recipe","title":"Mesh image recipe","text":"using GeoMakie, CairoMakie","category":"page"},{"location":"meshimage/","page":"Mesh image recipe","title":"Mesh image recipe","text":"Note that this uses CairoMakie, whose mesh UV support is not great. [W]GLMakie meshes have better UV support and will result in a sharper image.","category":"page"},{"location":"meshimage/#Affine-transform-(no-nonlinearity)","page":"Mesh image recipe","title":"Affine transform (no nonlinearity)","text":"","category":"section"},{"location":"meshimage/","page":"Mesh image recipe","title":"Mesh image recipe","text":"fig = Figure()\nax1 = Axis(fig[1, 1])\nmi = meshimage!(ax1, (Makie.logo()))\nfig","category":"page"},{"location":"meshimage/","page":"Mesh image recipe","title":"Mesh image recipe","text":"save(\"simple_scaling.png\", fig)","category":"page"},{"location":"meshimage/#Nonlinear-but-separable-(log-scaling)","page":"Mesh image recipe","title":"Nonlinear but separable (log scaling)","text":"","category":"section"},{"location":"meshimage/","page":"Mesh image recipe","title":"Mesh image recipe","text":"fig = Figure()\nax1 = Axis(fig[1, 1]; xscale = log, yscale = log10)\nlg = (Makie.logo())\nmi = meshimage!(ax1, 1 .. size(lg, 1), 1 .. size(lg, 2), lg)\nfig","category":"page"},{"location":"meshimage/","page":"Mesh image recipe","title":"Mesh image recipe","text":"save(\"log_scaling.png\", fig)","category":"page"},{"location":"meshimage/#Nonlinear-and-non-separable-(geographic-transformation)","page":"Mesh image recipe","title":"Nonlinear and non-separable (geographic transformation)","text":"","category":"section"},{"location":"meshimage/","page":"Mesh image recipe","title":"Mesh image recipe","text":"fig = Figure()\nax1 = GeoAxis(fig[1, 1]; dest = \"+proj=igh\")\nmi = meshimage!(ax1, -180..180, -90..90, (Makie.logo()))\nfig","category":"page"},{"location":"meshimage/","page":"Mesh image recipe","title":"Mesh image recipe","text":"This is peak graphic art right here! save(\"geo_scaling.png\", fig)","category":"page"},{"location":"meshimage/","page":"Mesh image recipe","title":"Mesh image recipe","text":"","category":"page"},{"location":"meshimage/","page":"Mesh image recipe","title":"Mesh image recipe","text":"This page was generated using Literate.jl.","category":"page"},{"location":"most_projections/","page":"Most Projections","title":"Most Projections","text":"EditURL = \"../../examples/most_projections.jl\"","category":"page"},{"location":"most_projections/","page":"Most Projections","title":"Most Projections","text":"using GeoMakie, CairoMakie\nprojections = [\"+proj=adams_hemi\", \"+proj=adams_ws1\", \"+proj=adams_ws2\",\n\"+proj=aea +lat_1=29.5 +lat_2=42.5\", \"+proj=aeqd\", \"+proj=airy\", \"+proj=aitoff\",\n\"+proj=apian\", \"+proj=august\", \"+proj=bacon\", \"+proj=bertin1953\", \"+proj=bipc +ns\",\n\"+proj=boggs\", \"+proj=bonne +lat_1=10\", \"+proj=cass\", \"+proj=cea\",\n\"+proj=chamb +lat_1=10 +lon_1=30 +lon_2=40\", \"+proj=collg\", \"+proj=comill\",\n\"+proj=crast\", \"+proj=denoy\", \"+proj=eck1\", \"+proj=eck2\", \"+proj=eck3\",\n\"+proj=eck4\", \"+proj=eck5\", \"+proj=eck6\", \"+proj=eqc\", \"+proj=eqdc +lat_1=55 +lat_2=60\",\n\"+proj=eqearth\", \"+proj=euler +lat_1=67 +lat_2=75\", \"+proj=fahey\", \"+proj=fouc\", \"+proj=fouc_s\",\n\"+proj=gall\", \"+proj=geos +h=35785831.0 +lon_0=-60 +sweep=y\", \"+proj=gins8\", \"+proj=gn_sinu +m=2 +n=3\",\n\"+proj=goode\", \"+proj=guyou\", \"+proj=hammer\", \"+proj=hatano\",\n\"+proj=igh\", \"+proj=igh_o +lon_0=-160\", \"+proj=imw_p +lat_1=30 +lat_2=-40\", \"+proj=isea\",\n\"+proj=kav5\", \"+proj=kav7\", \"+proj=laea\", \"+proj=lagrng\", \"+proj=larr\", \"+proj=lask\",\n\"+proj=lcca +lat_0=35\", \"+proj=leac\", \"+proj=loxim\",\n\"+proj=lsat +ellps=GRS80 +lat_1=-60 +lat_2=60 +lsat=2 +path=2\", \"+proj=mbt_s\", \"+proj=mbt_fps\",\n\"+proj=mbtfpp\", \"+proj=mbtfpq\", \"+proj=mbtfps\", \"+proj=merc\", \"+proj=mill\", \"+proj=misrsom +path=1\",\n\"+proj=moll\", \"+proj=murd1 +lat_1=30 +lat_2=50\",\n\"+proj=murd3 +lat_1=30 +lat_2=50\", \"+proj=natearth\", \"+proj=natearth2\",\n\"+proj=nell\", \"+proj=nell_h\", \"+proj=nicol\",\n\"+proj=ob_tran +o_proj=mill +o_lon_p=40 +o_lat_p=50 +lon_0=60\", \"+proj=ocea\", \"+proj=oea +m=1 +n=2\",\n\"+proj=omerc +lat_1=45 +lat_2=55\", \"+proj=ortel\", \"+proj=ortho\", \"+proj=patterson\", \"+proj=poly\",\n\"+proj=putp1\", \"+proj=putp2\", \"+proj=putp3\", \"+proj=putp3p\", \"+proj=putp4p\", \"+proj=putp5\",\n\"+proj=putp5p\", \"+proj=putp6\", \"+proj=putp6p\", \"+proj=qua_aut\", \"+proj=robin\", \"+proj=rouss\",\n\"+proj=rpoly\", \"+proj=sinu\", \"+proj=times\", \"+proj=tissot +lat_1=60 +lat_2=65\", \"+proj=tmerc\",\n\"+proj=tobmerc\", \"+proj=tpeqd +lat_1=60 +lat_2=65\", \"+proj=urm5 +n=0.9 +alpha=2 +q=4\",\n\"+proj=urmfps +n=0.5\", \"+proj=vandg\", \"+proj=vandg2\", \"+proj=vandg3\", \"+proj=vandg4\",\n\"+proj=vitk1 +lat_1=45 +lat_2=55\", \"+proj=wag1\", \"+proj=wag2\", \"+proj=wag3\", \"+proj=wag4\",\n\"+proj=wag5\", \"+proj=wag6\", \"+proj=wag7\", \"+proj=webmerc +datum=WGS84\", \"+proj=weren\",\n\"+proj=wink1\", \"+proj=wink2\", \"+proj=wintri\"]\nlet k = 1\n    fig = Figure(size=(1500, 1500))\n    @time for i in 1:10, j in 1:3\n        ga = GeoAxis(\n            fig[i, j];\n            aspect=nothing,\n            dest=projections[k],\n            title=\"$(projections[k])\"\n        )\n        lines!(ga, GeoMakie.coastlines())\n\n        k += 1\n    end\n    fig\nend","category":"page"},{"location":"most_projections/","page":"Most Projections","title":"Most Projections","text":"","category":"page"},{"location":"most_projections/","page":"Most Projections","title":"Most Projections","text":"This page was generated using Literate.jl.","category":"page"},{"location":"#GeoMakie.jl","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"","category":"section"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"GeoMakie.jl is a Julia package for plotting geospatial data on a given map projection. It is based on the Makie.jl plotting ecosystem.","category":"page"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"The package ClimateBase.jl builds upon GeoMakie.jl to create a seamless workflow between analyzing/manipulating climate data, and plotting them.","category":"page"},{"location":"#Installation","page":"GeoMakie.jl","title":"Installation","text":"","category":"section"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"This package is in development and may break, although we are currently working on a long-term stable interface.","category":"page"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"You can install it from the REPL like so:","category":"page"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"]add GeoMakie","category":"page"},{"location":"#GeoAxis","page":"GeoMakie.jl","title":"GeoAxis","text":"","category":"section"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"Using GeoMakie.jl is straightforward, although it does assume basic knowledge of the Makie.jl ecosystem.","category":"page"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"GeoMakie.jl provides an axis for plotting geospatial data, GeoAxis. Both are showcased in the examples below.","category":"page"},{"location":"#Gotchas","page":"GeoMakie.jl","title":"Gotchas","text":"","category":"section"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"When plotting a projection which has a limited domain (in either longitude or latitude), if your limits are not inside that domain, the axis will appear blank.  To fix this, simply correct the limits - you can even do it on the fly, using the xlims!(ax, low, high) or ylims!(ax, low, high) functions.","category":"page"},{"location":"#Examples","page":"GeoMakie.jl","title":"Examples","text":"","category":"section"},{"location":"#Surface-example","page":"GeoMakie.jl","title":"Surface example","text":"","category":"section"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"using GeoMakie, CairoMakie\n\nlons = -180:180\nlats = -90:90\nfield = [exp(cosd(l)) + 3(y/90) for l in lons, y in lats]\n\nfig = Figure()\nax = GeoAxis(fig[1,1])\nsurface!(ax, lons, lats, field; shading = NoShading)\nfig","category":"page"},{"location":"#Scatter-example","page":"GeoMakie.jl","title":"Scatter example","text":"","category":"section"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"using GeoMakie, CairoMakie\n\nlons = -180:180\nlats = -90:90\nslons = rand(lons, 2000)\nslats = rand(lats, 2000)\nsfield = [exp(cosd(l)) + 3(y/90) for (l,y) in zip(slons, slats)]\n\nfig = Figure()\nax = GeoAxis(fig[1,1])\nscatter!(slons, slats; color = sfield)\nfig","category":"page"},{"location":"#Map-projections","page":"GeoMakie.jl","title":"Map projections","text":"","category":"section"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"The default projection is given by the arguments source = \"+proj=longlat +datum=WGS84\", dest = \"+proj=eqearth\", so that if a different one is needed, for example a wintri projection one can do it as follows:","category":"page"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"using GeoMakie, CairoMakie\n\nlons = -180:180\nlats = -90:90\nfield = [exp(cosd(l)) + 3(y/90) for l in lons, y in lats]\n\nfig = Figure()\nax = GeoAxis(fig[1,1]; dest = \"+proj=wintri\")\nsurface!(ax, lons, lats, field; shading = NoShading)\nfig","category":"page"},{"location":"#Changing-central-longitude","page":"GeoMakie.jl","title":"Changing central longitude","text":"","category":"section"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"Be careful! Each data point is transformed individually. However, when using surface or contour plots this can lead to errors when the longitudinal dimension \"wraps\" around the planet.","category":"page"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"E.g., if the data have the dimensions","category":"page"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"lons = 0.5:359.5\nlats = -90:90\nfield = [exp(cosd(l)) + 3(y/90) for l in lons, y in lats];","category":"page"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"a surface! plot with the default arguments will lead to artifacts if the data along longitude 179 and 180 have significantly different values. To fix this, there are two approaches: (1) to change the central longitude of the map transformation, by changing the projection destination used like so:","category":"page"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"ax = GeoAxis(fig[1,1]; dest = \"+proj=eqearth +lon_0=180\")","category":"page"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"or (2), circshift your data appropriately so that the central longitude you want coincides with the center of the longitude dimension of the data.","category":"page"},{"location":"#Countries-loaded-with-GeoJSON","page":"GeoMakie.jl","title":"Countries loaded with GeoJSON","text":"","category":"section"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"using GeoMakie, CairoMakie\n\n# First, make a surface plot\nlons = -180:180\nlats = -90:90\nfield = [exp(cosd(l)) + 3(y/90) for l in lons, y in lats]\n\nfig = Figure()\nax = GeoAxis(fig[1,1])\nsf = surface!(ax, lons, lats, field; shading = NoShading)\ncb1 = Colorbar(fig[1,2], sf; label = \"field\", height = Relative(0.65))\n\nusing GeoMakie.GeoJSON\ncountries_file = GeoMakie.assetpath(\"vector\", \"countries.geo.json\")\ncountries = GeoJSON.read(read(countries_file, String))\n\nn = length(countries)\nhm = poly!(ax, countries; color= 1:n, colormap = :dense,\n    strokecolor = :black, strokewidth = 0.5,\n)\ntranslate!(hm, 0, 0, 100) # move above surface plot\n\nfig","category":"page"},{"location":"#Gotchas-2","page":"GeoMakie.jl","title":"Gotchas","text":"","category":"section"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"With CairoMakie, we recommend that you use image!(ga, ...) or heatmap!(ga, ...) to plot images or scalar fields into ga::GeoAxis.","category":"page"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"However, with GLMakie, which is much faster, these methods do not work; if you have used them, you will see an empty axis.  If you want to plot an image img, you can use a surface in the following way: surface!(ga, lonmin..lonmax, latmin..latmax, ones(size(img)...); color = img, shading = NoShading).","category":"page"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"To plot a scalar field, simply use surface!(ga, lonmin..lonmax, latmin..latmax, field).  The .. notation denotes an interval which Makie will automatically sample from to obtain the x and y points for the surface.","category":"page"},{"location":"#API","page":"GeoMakie.jl","title":"API","text":"","category":"section"},{"location":"","page":"GeoMakie.jl","title":"GeoMakie.jl","text":"GeoMakie.geoformat_ticklabels\nMakie.reset_limits!\nGeoMakie.interset_spine_and_rect\nGeoMakie.geo2basic\nGeoMakie.meshimage","category":"page"},{"location":"#GeoMakie.geoformat_ticklabels","page":"GeoMakie.jl","title":"GeoMakie.geoformat_ticklabels","text":"geoformat_ticklabels(nums::Vector)\n\nA semi-intelligent formatter for geographic tick labels.  Append \"ᵒ\" to the end of each tick label, to indicate degree.\n\nThis will check whether the ticklabel is an integer value (round(num) == num). If so, label as an Int (1 instead of 1.0) which looks a lot cleaner.\n\nExample\n\njulia> geoformat_ticklabels([1.0, 1.1, 2.5, 25])\n4-element Vector{String}:\n \"1ᵒ\"\n \"1.1ᵒ\"\n \"2.5ᵒ\"\n \"25ᵒ\"\n\n\n\n\n\n","category":"function"},{"location":"#Makie.reset_limits!","page":"GeoMakie.jl","title":"Makie.reset_limits!","text":"reset_limits!(axis; xauto = true, yauto = true)\n\nResets the axis limits depending on the value of axis.limits. If one of the two components of limits is nothing, that value is either copied from the targetlimits if xauto or yauto is false, respectively, or it is determined automatically from the plots in the axis. If one of the components is a tuple of two numbers, those are used directly.\n\n\n\n\n\n","category":"function"},{"location":"#GeoMakie.geo2basic","page":"GeoMakie.jl","title":"GeoMakie.geo2basic","text":"geo2basic(input)\n\nTakes any GeoInterface-compatible structure, and returns its equivalent in the GeometryBasics.jl package, which Makie is built on.\n\nCurrently works for the following traits:\n\n- PointTrait\n- LineTrait\n- LineStringTrait\n- PolygonTrait\n- MultiPolygonTrait\n\n\n\n\n\n","category":"function"},{"location":"#GeoMakie.meshimage","page":"GeoMakie.jl","title":"GeoMakie.meshimage","text":"meshimage([xs, ys,] zs)\nmeshimage!(ax, [xs, ys,] zs)\n\nPlots an image on a mesh.\n\nUseful for nonlinear transforms where a large image would take too long to transform usefully, but a smaller mesh can still represent the inherent nonlinearity of the space.\n\nThis basically plots a mesh with uv coordinates, and textures it by the provided image.  Its conversion trait is Image (TODO: change this to DiscreteSurfaceLike).\n\nFor now, it only accepts RGB images.  This could be changed in the future.\n\nAttributes\n\nAvailable attributes and their defaults for Plot{GeoMakie.meshimage} are: \n\n  npoints  100\n  space    :data\n\n\n\n\n\n","category":"function"},{"location":"projections/","page":"Projections","title":"Projections","text":"EditURL = \"../../examples/projections.jl\"","category":"page"},{"location":"projections/","page":"Projections","title":"Projections","text":"using GeoMakie, CairoMakie\n\nlons = -180:180\nlats = -90:90\nfield = [exp(cosd(l)) + 3(y / 90) for l in lons, y in lats]\n\nfig = Figure()\nax1 = GeoAxis(fig[1, 1], dest = \"+proj=vitk1 +lat_1=45 +lat_2=55\",title = \"vitk1\", xgridcolor=:red)\nax2 = GeoAxis(fig[1, 2]; dest=\"+proj=wintri\", title = \"wintri\")\n\nsurface!(ax1, lons, lats, field; shading = NoShading, colormap = (:plasma, 0.45))\nsurface!(ax2, lons, lats, field; shading = NoShading, colormap = (:plasma, 0.45))\n\nfig","category":"page"},{"location":"projections/","page":"Projections","title":"Projections","text":"","category":"page"},{"location":"projections/","page":"Projections","title":"Projections","text":"This page was generated using Literate.jl.","category":"page"}]
}
