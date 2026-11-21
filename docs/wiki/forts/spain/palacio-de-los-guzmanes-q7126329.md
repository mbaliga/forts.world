# Palacio de los Guzmanes

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-de-los-guzmanes-q7126329` |
| Coordinates | 42.59842, -5.57014 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.59842/-5.57014)) |
| Wikidata | [Q7126329](https://www.wikidata.org/wiki/Q7126329) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|monument |
| Administrative area | León |
| Inception | 1600 |
| Designations | bien de interés cultural |
| UNESCO WHC id | 669-1530 |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, marker 2, road 157, building 279, wall 14, retaining-wall 2, water 2, zone 7).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 60, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/371731 historic=castle Q7126329 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 279 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 157 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.59842/-5.57014) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|monument; sitelinks=5; wikidata:Q7126329 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/palacio-de-los-guzmanes-q7126329.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
