# Gülichsburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gulichsburg-q1409910` |
| Coordinates | 50.6446, 6.64631 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.6446/6.64631)) |
| Wikidata | [Q1409910](https://www.wikidata.org/wiki/Q1409910) (CC0) |
| Wikidata class | castle |
| Types | water castle |
| Administrative area | Zülpich |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `ruins` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 376 elements (outline 1, marker 1, road 91, building 725, zone 32, waterway 6, wall 115, retaining-wall 9, water 1).

Evidence: documented 0, mapped 376, inferred 0, derived 0; heights documented 132, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/458249286 historic=ruins 237 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 725 mapped (trace size budget); the rest of the town is not drawn
- origin moved 236 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.6446/6.64631) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; water castle; sitelinks=2; wikidata:Q1409910 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 376 elements); data/traces/gulichsburg-q1409910.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
