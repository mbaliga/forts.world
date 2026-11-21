# Miller-von-Aichholz-Schlössel

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `miller-von-aichholz-schlossel-q1935447` |
| Coordinates | 48.20366, 16.25318 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.20366/16.25318)) |
| Wikidata | [Q1935447](https://www.wikidata.org/wiki/Q1935447) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|building |
| Administrative area | Vienna |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 230 elements (outline 1, road 99, building 116, wall 3, zone 7, water 3, waterway 1).

Evidence: documented 0, mapped 230, inferred 0, derived 0; heights documented 9, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26257327 historic=castle Q1935447 6 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.20366/16.25318) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|building; sitelinks=2; wikidata:Q1935447 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 230 elements); data/traces/miller-von-aichholz-schlossel-q1935447.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
