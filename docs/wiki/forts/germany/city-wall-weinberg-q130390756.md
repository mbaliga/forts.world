# City Wall Weinberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-wall-weinberg-q130390756` |
| Coordinates | 52.27408, 11.85662 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.27408/11.85662)) |
| Wikidata | [Q130390756](https://www.wikidata.org/wiki/Q130390756) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Burg |
| Designations | heritage monument in Saxony-Anhalt |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |
| OSM `description` | Wasserturm am Weinberg in Burg (bei Magdeburg) |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, marker 18, road 137, building 400, waterway 7, water 3, wall 14, zone 9, retaining-wall 4).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 37, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/303946292 historic=yes Q23073113 99 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 400 mapped (trace size budget); the rest of the town is not drawn
- origin moved 99 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.27408/11.85662) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q130390756 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/city-wall-weinberg-q130390756.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
