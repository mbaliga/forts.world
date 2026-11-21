# Porta Adda Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-adda-castle-q112138864` |
| Coordinates | 45.31779, 9.50707 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.31779/9.50707)) |
| Wikidata | [Q112138864](https://www.wikidata.org/wiki/Q112138864) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Lodi |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, marker 12, road 123, waterway 1, building 544, wall 32, zone 4).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 101, inferred 0, unknown 51.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4667022 historic=building Q3831919 233 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 544 mapped (trace size budget); the rest of the town is not drawn
- origin moved 233 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.31779/9.50707) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q112138864 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 293 elements); data/traces/porta-adda-castle-q112138864.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
