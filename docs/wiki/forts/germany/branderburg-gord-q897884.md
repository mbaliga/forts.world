# Branderburg Gord

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `branderburg-gord-q897884` |
| Coordinates | 52.415, 12.5667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.415/12.5667)) |
| Wikidata | [Q897884](https://www.wikidata.org/wiki/Q897884) (CC0) |
| Wikidata class | fortification |
| Types | gord |
| Administrative area | Brandenburg an der Havel |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |
| OSM `website` | https://www.dom-brandenburg.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 238 elements (outline 1, marker 2, waterway 6, road 93, water 2, building 300, zone 8, wall 6).

Evidence: documented 0, mapped 238, inferred 0, derived 0; heights documented 31, inferred 0, unknown 95.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/44435149 historic=yes Q1236555 57 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 300 mapped (trace size budget); the rest of the town is not drawn
- origin moved 57 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.415/12.5667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gord; sitelinks=5; wikidata:Q897884 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 238 elements); data/traces/branderburg-gord-q897884.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
