# Bujović palace

> Montenegro · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bujovic-palace-q20526458` |
| Coordinates | 42.48794, 18.69566 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.48794/18.69566)) |
| Wikidata | [Q20526458](https://www.wikidata.org/wiki/Q20526458) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building |
| Administrative area | Perast |
| Inception | 1694 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 135 elements (outline 1, road 46, building 71, retaining-wall 3, wall 12, coastline 1, water 1).

Evidence: documented 0, mapped 135, inferred 0, derived 1; heights documented 2, inferred 0, unknown 84.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/164382485 historic=castle Q20526458 1 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":221,"medianInside":0,"medianOutside":26.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.48794/18.69566) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building; sitelinks=2; wikidata:Q20526458 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 135 elements); data/traces/bujovic-palace-q20526458.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/montenegro.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
