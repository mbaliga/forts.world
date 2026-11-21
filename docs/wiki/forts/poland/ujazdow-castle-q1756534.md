# Ujazdów Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ujazdow-castle-q1756534` |
| Coordinates | 52.21944, 21.03083 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.21944/21.03083)) |
| Wikidata | [Q1756534](https://www.wikidata.org/wiki/Q1756534) (CC0) |
| Wikidata class | castle |
| Types | castle\|architectural heritage monument |
| Administrative area | Warsaw |
| Inception | 1624 |
| Designations | municipal immovable monument in Poland\|immovable monument in Poland\|provincial register of monuments |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 356 elements (outline 1, marker 13, road 449, zone 121, building 24, retaining-wall 9, cliff 6, water 1, waterway 1, wall 30).

Evidence: documented 0, mapped 356, inferred 0, derived 0; heights documented 56, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28363553 historic=castle Q1756534 6 m from ledger point
- roads capped: kept the 150 longest of 449 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the outline centroid
- 30 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.21944/21.03083) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|architectural heritage monument; sitelinks=20; wikidata:Q1756534 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 356 elements); data/traces/ujazdow-castle-q1756534.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
