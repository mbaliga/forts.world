# Maratha landscape component-reference pass

Status: five scene-map anchors now use the reference coordinates published in UNESCO's 2025 inscribed-property map. This is a location correction, **not** a fort-footprint reconstruction. The original 138-site catalogue points remain unchanged as approximate discovery coordinates; each scene preserves its former point in `siteReference.previousCataloguePoint`.

| Site | UNESCO map component | Reference coordinate (WGS84) | Inscribed property area | Geometry status |
| --- | --- | --- | ---: | --- |
| Salher | 1739-001 | 20.722500, 73.942500 | 335.96 ha | Wall/plateau boundary not digitized |
| Raigad | 1739-005 | 18.236111, 73.444444 | 340.77 ha | Wall/summit and site boundary not digitized |
| Rajgad | 1739-006 | 18.246111, 73.682500 | 269.26 ha | Wall/machis and site boundary not digitized |
| Pratapgad | 1739-007 | 17.935833, 73.578611 | 79.30 ha | Wall and forest boundary not digitized |
| Gingee | 1739-012 | 12.250556, 79.401389 | 225.49 ha | Three-hill and lower-fort boundary not reconciled |

These are UNESCO component-reference coordinates, not boundary vertices or independently verified wall centres. The published areas describe the inscribed heritage properties, not the amount of enclosed ground, a fort-wall perimeter, or a playable encounter map. The atlas now identifies that distinction and shows five decimal places for these source-backed reference points. It must not imply equivalent positional accuracy for unreviewed catalogue sites.

## Rajgad survey evidence and limits

Patil et al. (2026) report an orthomosaic at 10 cm/pixel, a digital surface model, a point cloud/mesh, field-collected feature points and a 52-feature map. The paper reports 48 tanks, an 8,032 m wall circuit, 87.5 acres mapped within that circuit and a 5-acre central fort. It also states that DGPS ground-control points were not feasible and that multiple flights produced lighting variation. The reported 87.5 acres is not the UNESCO component's 269.26 ha property area; keep both extents labeled by their source and definition. The publication links no raw orthomosaic, DSM, point cloud or feature-coordinate download, so those products have not been digitized into the game.

The existing Rajgad scene remains schematic: it has not been aligned to the reported wall circuit, three machis, Balekilla relief, water tanks, village approaches or current orthomosaic. The numeric source evidence is useful for subsequent scale checks, but does not provide enough accessible geometry to trace the outline or place individual features faithfully.

## Next geometry work

1. Obtain the UNESCO component-map PDFs and digitize each property polygon only as a separate heritage-site context layer; do not substitute it for a fort wall.
2. For Rajgad, request or locate the authors' orthomosaic/feature-coordinate layers, then register them against the UNESCO reference coordinate and independent control points. Until then, use the paper's measurements as checks rather than drawing a synthetic perimeter.
3. For Raigad, compare the 2025 UNESCO map with ASI excavation plans, the Government of Maharashtra's Raigad Fort works documentation, and current imagery; model the cliff-and-concealed-gateway approach and capital settlement only from source-located geometry.
4. Apply the same source separation to Salher, Pratapgad and Gingee before changing their fort outlines. Each playable scene continues to be marked **not verified**.

## Sources

- UNESCO: [Maratha Military Landscapes component coordinates and property areas](https://whc.unesco.org/en/list/1739/maps/) and [2025 map of the inscribed property](https://whc.unesco.org/en/documents/222454).
- Patil, Abhijit, Sachin Panhalkar, Sandip Jadhav and Mansing Chavan. 2026. “Spatial Exploration of Rajgad Fort: An Integrated Approach of UAV Technology and Geographical Information System.” *Journal of Geomatics* 20(1): 25–31. [Article PDF](https://onlinejog.org/index.php/journal_of_geomatics/article/download/205/116/2084).
- Government of India, Press Information Bureau: [ASI excavation and conservation work at Raigad](https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=2086005&lang=2&reg=48).
- Government of Maharashtra, MRSAC: [3D mapping of forts project](https://mrsac.gov.in/MRSAC/flipbook/project/3d-mapping-of-forts-in-maharashtra-using-an-integrated-geo-spatial-technology-approach). The public project page lists high-resolution satellite base maps, georeferenced cadastral maps, DEM/DTM, drone orthophotos, LiDAR, point clouds and engineering drawings as intended outputs; this review did not find downloadable site-specific layers.
