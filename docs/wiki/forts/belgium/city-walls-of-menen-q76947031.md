# City walls of Menen

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-menen-q76947031` |
| Coordinates | 50.79556, 3.12167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.79556/3.12167)) |
| Wikidata | [Q76947031](https://www.wikidata.org/wiki/Q76947031) (CC0) |
| Wikidata class | fortification |
| Types | defence work |
| Administrative area | Menen |
| Inception | 1578 |
| Designations | heritage site |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |
| OSM `heritage` | 1 |
| OSM `website` | https://inventaris.onroerenderfgoed.be/dibe/relict/55745 |

## What the model contains

Tier **T1**, status `outline+walls`, 236 elements (outline 1, marker 6, road 90, waterway 1, zone 14, building 467, water 1, wall 3).

Evidence: documented 0, mapped 236, inferred 0, derived 0; heights documented 7, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/366674945 historic=yes 102 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 467 mapped (trace size budget); the rest of the town is not drawn
- origin moved 101 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.79556/3.12167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defence work; sitelinks=3; wikidata:Q76947031 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 236 elements); data/traces/city-walls-of-menen-q76947031.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
