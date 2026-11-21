# Hamal Castle

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hamal-castle-q5644002` |
| Coordinates | 50.75441, 5.46137 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.75441/5.46137)) |
| Wikidata | [Q5644002](https://www.wikidata.org/wiki/Q5644002) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Tongeren |
| Inception | 17de  |
| Designations | beschermd monument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | https://inventaris.onroerenderfgoed.be/erfgoedobjecten/37579 |
| OSM `description` | Omgracht kasteel met rest van romaanse donjon |

## What the model contains

Tier **T1**, status `outline+walls`, 60 elements (outline 1, road 13, zone 26, building 16, waterway 1, wall 3).

Evidence: documented 0, mapped 60, inferred 0, derived 0; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/154751085 historic=castle Q5644002 9 m from ledger point
- origin moved 10 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.75441/5.46137) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=3; wikidata:Q5644002 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 60 elements); data/traces/hamal-castle-q5644002.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
