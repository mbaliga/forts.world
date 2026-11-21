# Ćipiko Palace

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cipiko-palace-q16116710` |
| Coordinates | 43.51669, 16.25093 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.51669/16.25093)) |
| Wikidata | [Q16116710](https://www.wikidata.org/wiki/Q16116710) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Trogir |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 3, road 154, building 369, zone 3, wall 9, coastline 6, water 3).

Evidence: documented 0, mapped 295, inferred 0, derived 3; heights documented 2, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/344508450 historic=castle Q16116710 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 369 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 154 mapped (trace size budget); minor lanes are not drawn
- sea-0: DEM check ok {"cells":197,"medianInside":0.1,"medianOutside":2.8}
- sea-1: DEM check failed {"cells":368,"medianInside":1.6,"medianOutside":1.5}
- sea-2: DEM check failed {"cells":387,"medianInside":1.8,"medianOutside":0.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.51669/16.25093) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=7; wikidata:Q16116710 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/cipiko-palace-q16116710.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
