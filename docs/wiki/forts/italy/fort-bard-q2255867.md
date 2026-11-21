# Fort Bard

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-bard-q2255867` |
| Coordinates | 45.60817, 7.74458 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.60817/7.74458)) |
| Wikidata | [Q2255867](https://www.wikidata.org/wiki/Q2255867) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum\|private museum\|historical park museum\|military museum building\|palazzo museum |
| Administrative area | Bard, Aosta Valley |
| Inception | 1830 |
| Designations | Italian national heritage |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.fortedibard.it |

## What the model contains

Tier **T1**, status `outline+walls`, 261 elements (outline 1, marker 6, road 85, waterway 9, building 66, cliff 6, zone 25, wall 14, water 3, retaining-wall 46).

Evidence: documented 0, mapped 261, inferred 0, derived 0; heights documented 2, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21114886 historic=castle Q2255867 13 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.60817/7.74458) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum\|private museum\|historical park museum\|military museum building\|palazzo museum; sitelinks=15; wikidata:Q2255867 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 261 elements); data/traces/fort-bard-q2255867.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
