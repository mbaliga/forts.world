# Combat shelter No. 11, Ringstand 58c type

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `combat-shelter-no-11-ringstand-58c-type-q119810294` |
| Coordinates | 52.24732, 20.95874 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.24732/20.95874)) |
| Wikidata | [Q119810294](https://www.wikidata.org/wiki/Q119810294) (CC0) |
| Wikidata class | fortification |
| Types | architectural heritage monument\|tobruk |
| Administrative area | Wola |
| Inception | 1944 |
| Designations | municipal immovable monument in Poland\|immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 244 elements (outline 1, road 378, building 97, zone 193, wall 15).

Evidence: documented 0, mapped 244, inferred 0, derived 0; heights documented 44, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/121658413 historic=yes 414 m from ledger point
- pruned to the outline plus 150 m: 684 -> 380 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 63 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 213 mapped (trace size budget); minor lanes are not drawn
- origin moved 413 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.24732/20.95874) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; architectural heritage monument\|tobruk; sitelinks=1; wikidata:Q119810294 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 244 elements); data/traces/combat-shelter-no-11-ringstand-58c-type-q119810294.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
