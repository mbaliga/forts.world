# Porta San Mama

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-san-mama-q28000589` |
| Coordinates | 44.41196, 12.20068 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.41196/12.20068)) |
| Wikidata | [Q28000589](https://www.wikidata.org/wiki/Q28000589) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Ravenna |
| Inception | 1650 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 217 elements (outline 1, marker 2, road 89, building 480, wall 2, zone 3).

Evidence: documented 0, mapped 217, inferred 0, derived 0; heights documented 1, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/158277184 historic=yes Q106077075 96 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 480 mapped (trace size budget); the rest of the town is not drawn
- origin moved 96 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.41196/12.20068) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q28000589 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 217 elements); data/traces/porta-san-mama-q28000589.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
