# Alcalá del Júcar Castle

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alcala-del-jucar-castle-q2834492` |
| Coordinates | 39.19115, -1.43008 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.19115/-1.43008)) |
| Wikidata | [Q2834492](https://www.wikidata.org/wiki/Q2834492) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|castle |
| Administrative area | Alcalá del Júcar |
| Designations | bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 294 elements (outline 1, road 78, building 280, wall 73, waterway 6, zone 12, water 2, cliff 2).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 0, inferred 0, unknown 193.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/645928946 historic=castle Q2834492 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 280 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.19115/-1.43008) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|castle; sitelinks=2; wikidata:Q2834492 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 294 elements); data/traces/alcala-del-jucar-castle-q2834492.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
