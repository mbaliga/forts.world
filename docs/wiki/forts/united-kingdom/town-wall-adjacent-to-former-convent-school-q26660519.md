# Town Wall Adjacent To Former Convent School

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `town-wall-adjacent-to-former-convent-school-q26660519` |
| Coordinates | 54.28521, -0.4007 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.28521/-0.4007)) |
| Wikidata | [Q26660519](https://www.wikidata.org/wiki/Q26660519) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Scarborough |
| Designations | Grade II listed building |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/scarborough-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, marker 4, coastline 2, road 136, zone 1, wall 16, building 240, retaining-wall 2, water 4).

Evidence: documented 0, mapped 286, inferred 0, derived 4; heights documented 21, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/148829580 historic=castle Q1963850 751 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 240 mapped (trace size budget); the rest of the town is not drawn
- origin moved 751 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":2,"medianInside":3,"medianOutside":20.5}
- sea-1: DEM check ok {"cells":43,"medianInside":-2.1,"medianOutside":21.7}
- sea-2: DEM check ok {"cells":7,"medianInside":0.8,"medianOutside":20.7}
- sea-3: DEM check ok {"cells":266,"medianInside":-1.9,"medianOutside":28.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.28521/-0.4007) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=3; wikidata:Q26660519 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/town-wall-adjacent-to-former-convent-school-q26660519.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
