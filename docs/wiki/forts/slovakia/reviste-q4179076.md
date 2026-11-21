# Revište

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `reviste-q4179076` |
| Coordinates | 48.52161, 18.72275 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.52161/18.72275)) |
| Wikidata | [Q4179076](https://www.wikidata.org/wiki/Q4179076) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |
| OSM `website` | https://www.hradreviste.sk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 66 elements (outline 1, marker 1, waterway 5, building 34, road 16, wall 9).

Evidence: documented 0, mapped 66, inferred 0, derived 0; heights documented 5, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/778864549 historic=castle Q4179076 15 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.52161/18.72275) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=6; wikidata:Q4179076 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 66 elements); data/traces/reviste-q4179076.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
