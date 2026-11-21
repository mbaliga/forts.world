# Fosso Reale (Livorno)

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fosso-reale-livorno-q3749023` |
| Coordinates | 43.55129, 10.31526 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.55129/10.31526)) |
| Wikidata | [Q3749023](https://www.wikidata.org/wiki/Q3749023) (CC0) |
| Wikidata class | fortification |
| Types | canal\|moat |
| Administrative area | Livorno |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 330 elements (outline 1, marker 15, road 281, waterway 8, zone 15, building 152, water 1, wall 19).

Evidence: documented 0, mapped 330, inferred 0, derived 0; heights documented 22, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5741468 historic=castle Q3748709 497 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 152 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 281 mapped (trace size budget); minor lanes are not drawn
- origin moved 497 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.55129/10.31526) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; canal\|moat; sitelinks=4; wikidata:Q3749023 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 330 elements); data/traces/fosso-reale-livorno-q3749023.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
