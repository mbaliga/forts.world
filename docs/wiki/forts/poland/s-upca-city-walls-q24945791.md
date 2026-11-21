# Słupca City Walls

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `s-upca-city-walls-q24945791` |
| Coordinates | 52.28822, 17.87371 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.28822/17.87371)) |
| Wikidata | [Q24945791](https://www.wikidata.org/wiki/Q24945791) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Słupca |
| Designations | cultural property protection in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline-only`, 226 elements (outline 1, road 96, building 428, zone 8, waterway 1).

Evidence: documented 0, mapped 226, inferred 0, derived 0; heights documented 7, inferred 0, unknown 113.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1323625761 historic=monument 201 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 428 mapped (trace size budget); the rest of the town is not drawn
- origin moved 200 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.28822/17.87371) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q24945791 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 226 elements); data/traces/s-upca-city-walls-q24945791.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
