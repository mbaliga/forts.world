# Pałacyk Wielopolskich

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pa-acyk-wielopolskich-q2047296` |
| Coordinates | 52.22176, 21.02372 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.22176/21.02372)) |
| Wikidata | [Q2047296](https://www.wikidata.org/wiki/Q2047296) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|no\|villa\|palace\|architectural heritage monument |
| Administrative area | Śródmieście |
| Inception | 1876 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 392 elements (outline 1, marker 18, road 295, zone 119, building 82, wall 14, retaining-wall 4, waterway 3, water 1).

Evidence: documented 0, mapped 392, inferred 0, derived 0; heights documented 77, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/30861525 historic=castle Q2047296 6 m from ledger point
- roads capped: kept the 150 longest of 295 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.22176/21.02372) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|no\|villa\|palace\|architectural heritage monument; sitelinks=3; wikidata:Q2047296 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 392 elements); data/traces/pa-acyk-wielopolskich-q2047296.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
