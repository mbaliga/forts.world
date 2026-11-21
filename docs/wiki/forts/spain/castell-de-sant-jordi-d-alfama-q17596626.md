# Castell de Sant Jordi d'Alfama

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-de-sant-jordi-d-alfama-q17596626` |
| Coordinates | 40.9114, 0.83201 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.9114/0.83201)) |
| Wikidata | [Q17596626](https://www.wikidata.org/wiki/Q17596626) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | L'Ametlla de Mar |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 38 elements (outline 1, road 17, water 5, building 3, wall 4, waterway 1, coastline 7).

Evidence: documented 0, mapped 38, inferred 0, derived 4; heights documented 1, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/626417884 historic=castle Q17596626 8 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":399,"medianInside":3,"medianOutside":0}
- sea-1: DEM check failed {"cells":394,"medianInside":2.6,"medianOutside":0}
- sea-2: DEM check ok {"cells":221,"medianInside":0,"medianOutside":4.9}
- sea-3: DEM check failed {"cells":400,"medianInside":3,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.9114/0.83201) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q17596626 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 38 elements); data/traces/castell-de-sant-jordi-d-alfama-q17596626.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
