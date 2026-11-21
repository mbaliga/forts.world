# Opernring 8, Vienna

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `opernring-8-vienna-q37947011` |
| Coordinates | 48.20333, 16.36703 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.20333/16.36703)) |
| Wikidata | [Q37947011](https://www.wikidata.org/wiki/Q37947011) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building |
| Administrative area | Innere Stadt |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 264 elements (outline 1, marker 12, road 456, building 30, zone 60, waterway 1, water 1, retaining-wall 6, wall 3).

Evidence: documented 0, mapped 264, inferred 0, derived 0; heights documented 28, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2499199 historic=castle Q37947011 3 m from ledger point
- roads capped: kept the 150 longest of 456 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.20333/16.36703) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building; sitelinks=1; wikidata:Q37947011 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 264 elements); data/traces/opernring-8-vienna-q37947011.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
