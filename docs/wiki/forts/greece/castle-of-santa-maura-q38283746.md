# Castle of Santa Maura

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-santa-maura-q38283746` |
| Coordinates | 38.84452, 20.72034 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.84452/20.72034)) |
| Wikidata | [Q38283746](https://www.wikidata.org/wiki/Q38283746) (CC0) |
| Wikidata class | castle |
| Types | castle\|military base |
| Administrative area | Lefkada Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `description` | Fortress built around 1300 to protect canal. Modified by the Ottomans and the venetians. |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 136 elements (outline 1, marker 1, coastline 8, road 41, building 11, retaining-wall 2, wall 62, zone 4, waterway 1, water 4).

Evidence: documented 0, mapped 136, inferred 0, derived 4; heights documented 0, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/102978855 historic=castle Q38283746 7 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":155,"medianInside":0,"medianOutside":0.1}
- sea-1: DEM check ok {"cells":641,"medianInside":0,"medianOutside":0.9}
- sea-2: DEM check failed {"cells":726,"medianInside":0,"medianOutside":0}
- sea-3: DEM check failed {"cells":321,"medianInside":0,"medianOutside":0}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.84452/20.72034) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|military base; sitelinks=5; wikidata:Q38283746 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 136 elements); data/traces/castle-of-santa-maura-q38283746.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
