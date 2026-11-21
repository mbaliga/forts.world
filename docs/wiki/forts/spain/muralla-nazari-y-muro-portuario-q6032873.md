# Muralla nazarí y muro portuario

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralla-nazari-y-muro-portuario-q6032873` |
| Coordinates | 36.71832, -4.42047 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.71832/-4.42047)) |
| Wikidata | [Q6032873](https://www.wikidata.org/wiki/Q6032873) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|citywalls\|defensive wall\|monument |
| Administrative area | Málaga |
| Designations | bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `heritage` | 2 |
| OSM `ruins` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 322 elements (outline 1, marker 25, road 237, building 124, coastline 1, wall 14, zone 5, water 6).

Evidence: documented 0, mapped 322, inferred 0, derived 1; heights documented 112, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12275297 historic=ruins Q6032873 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 124 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 237 mapped (trace size budget); minor lanes are not drawn
- origin moved 29 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":10,"medianInside":0.3,"medianOutside":14.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.71832/-4.42047) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|citywalls\|defensive wall\|monument; sitelinks=2; wikidata:Q6032873 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 322 elements); data/traces/muralla-nazari-y-muro-portuario-q6032873.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
