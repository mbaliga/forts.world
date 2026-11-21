# castle of Plauen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-plauen-q29118897` |
| Coordinates | 50.49502, 12.14012 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.49502/12.14012)) |
| Wikidata | [Q29118897](https://www.wikidata.org/wiki/Q29118897) (CC0) |
| Wikidata class | ruin |
| Types | castle\|ruins |
| Administrative area | Plauen |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 333 elements (outline 1, marker 5, road 226, water 3, building 132, waterway 10, zone 30, wall 10, retaining-wall 4).

Evidence: documented 0, mapped 333, inferred 0, derived 0; heights documented 15, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/105575706 historic=building 249 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 132 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 226 mapped (trace size budget); minor lanes are not drawn
- origin moved 248 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.49502/12.14012) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|ruins; sitelinks=2; wikidata:Q29118897 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 333 elements); data/traces/castle-of-plauen-q29118897.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
