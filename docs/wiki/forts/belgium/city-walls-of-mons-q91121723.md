# City walls of Mons

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-mons-q91121723` |
| Coordinates | 50.45496, 3.95196 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.45496/3.95196)) |
| Wikidata | [Q91121723](https://www.wikidata.org/wiki/Q91121723) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Mons |
| Inception | 0900 |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, marker 6, road 152, building 1073, wall 14, retaining-wall 7).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 25, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1342249820 historic=building Q85853480 12 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1073 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 152 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.45496/3.95196) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q91121723 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/city-walls-of-mons-q91121723.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
