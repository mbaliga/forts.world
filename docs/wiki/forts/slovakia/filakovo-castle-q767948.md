# Fiľakovo Castle

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `filakovo-castle-q767948` |
| Coordinates | 48.27167, 19.82528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.27167/19.82528)) |
| Wikidata | [Q767948](https://www.wikidata.org/wiki/Q767948) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Fiľakovo |
| Inception | 1200 |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |
| OSM `website` | https://www.hradfilakovo.sk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 335 elements (outline 1, marker 6, road 151, building 204, wall 54, waterway 2, zone 1).

Evidence: documented 0, mapped 335, inferred 0, derived 0; heights documented 1, inferred 0, unknown 174.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14656908 historic=castle Q767948 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 204 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 151 mapped (trace size budget); minor lanes are not drawn
- origin moved 20 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.27167/19.82528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=10; wikidata:Q767948 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 335 elements); data/traces/filakovo-castle-q767948.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
