# Torre del Xarco

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-xarco-q43147041` |
| Coordinates | 38.48839, -0.28239 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.48839/-0.28239)) |
| Wikidata | [Q43147041](https://www.wikidata.org/wiki/Q43147041) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | La Vila Joiosa |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 18 elements (outline 1, coastline 2, building 2, road 10, cliff 1, waterway 1, water 1).

Evidence: documented 0, mapped 18, inferred 0, derived 1; heights documented 2, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/934440589 historic=ruins 1 m from ledger point
- sea-0: DEM check ok {"cells":283,"medianInside":0,"medianOutside":8.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.48839/-0.28239) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=3; wikidata:Q43147041 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 18 elements); data/traces/torre-del-xarco-q43147041.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
