# Palacio de Valle

> Cuba · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-de-valle-q1289259` |
| Coordinates | 22.12135, -80.45147 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.12135/-80.45147)) |
| Wikidata | [Q1289259](https://www.wikidata.org/wiki/Q1289259) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|historic house |
| Administrative area | Cienfuegos |
| Inception | 1917 |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline-only`, 79 elements (outline 1, road 22, zone 1, building 52, coastline 1, water 2).

Evidence: documented 0, mapped 79, inferred 0, derived 2; heights documented 1, inferred 0, unknown 51.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/702108811 historic=castle Q1289259 7 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":75,"medianInside":2.1,"medianOutside":4.8}
- sea-1: DEM check ok {"cells":166,"medianInside":2.9,"medianOutside":5.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.12135/-80.45147) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|historic house; sitelinks=5; wikidata:Q1289259 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 79 elements); data/traces/palacio-de-valle-q1289259.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/cuba.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
