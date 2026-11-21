# Torre d'en Seguer

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-d-en-seguer-q96621995` |
| Coordinates | 41.12963, 1.35958 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.12963/1.35958)) |
| Wikidata | [Q96621995](https://www.wikidata.org/wiki/Q96621995) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Tarragona |
| Designations | Cultural Asset part of the cultural heritage of Catalonia |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 76 elements (outline 1, marker 1, road 45, coastline 6, building 12, wall 3, zone 1, cliff 1, waterway 5, water 1).

Evidence: documented 0, mapped 76, inferred 0, derived 1; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/231854433 historic=castle Q96621995 1 m from ledger point
- sea-0: DEM check ok {"cells":138,"medianInside":0,"medianOutside":13.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.12963/1.35958) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q96621995 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 76 elements); data/traces/torre-d-en-seguer-q96621995.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
