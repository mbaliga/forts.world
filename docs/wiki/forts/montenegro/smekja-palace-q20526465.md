# Smekja palace

> Montenegro · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `smekja-palace-q20526465` |
| Coordinates | 42.48708, 18.69744 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.48708/18.69744)) |
| Wikidata | [Q20526465](https://www.wikidata.org/wiki/Q20526465) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building |
| Inception | 1936 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 233 elements (outline 1, road 76, building 124, retaining-wall 2, wall 27, coastline 2, water 1).

Evidence: documented 0, mapped 233, inferred 0, derived 1; heights documented 4, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/303138707 historic=castle Q20526465 3 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":181,"medianInside":0,"medianOutside":24}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.48708/18.69744) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building; sitelinks=2; wikidata:Q20526465 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 233 elements); data/traces/smekja-palace-q20526465.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/montenegro.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
