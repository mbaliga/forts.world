# Myrina Castle

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `myrina-castle-q38280059` |
| Coordinates | 39.8779, 25.05573 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.8779/25.05573)) |
| Wikidata | [Q38280059](https://www.wikidata.org/wiki/Q38280059) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Limnos Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 216 elements (outline 1, marker 1, wall 27, building 125, road 45, cliff 7, coastline 2, zone 2, water 6).

Evidence: documented 0, mapped 216, inferred 0, derived 6; heights documented 0, inferred 0, unknown 152.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1241959191 historic=archaeological_site Q38280059 75 m from ledger point
- origin moved 76 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":278,"medianInside":0,"medianOutside":16.7}
- sea-1: DEM check ok {"cells":4,"medianInside":0,"medianOutside":6.6}
- sea-2: DEM check ok {"cells":1,"medianInside":0,"medianOutside":6.4}
- sea-3: DEM check ok {"cells":88,"medianInside":0,"medianOutside":11.1}
- sea-4: DEM check ok {"cells":14,"medianInside":4.3,"medianOutside":7}
- sea-5: DEM check failed {"cells":1088,"medianInside":6.4,"medianOutside":0.1}
- 47 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.8779/25.05573) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q38280059 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 216 elements); data/traces/myrina-castle-q38280059.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
