# Castle of Brescia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-brescia-q3662506` |
| Coordinates | 45.54291, 10.22522 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.54291/10.22522)) |
| Wikidata | [Q3662506](https://www.wikidata.org/wiki/Q3662506) (CC0) |
| Wikidata class | castle |
| Types | castle\|zoo |
| Administrative area | Brescia |
| Inception | 1913 |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 374 elements (outline 1, marker 9, road 451, zone 28, building 208, waterway 3, wall 49, retaining-wall 11, cliff 2, water 1).

Evidence: documented 0, mapped 374, inferred 0, derived 0; heights documented 18, inferred 0, unknown 162.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3235498 historic=castle Q3662506 34 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 208 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 451 mapped (trace size budget); minor lanes are not drawn
- origin moved 36 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.54291/10.22522) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|zoo; sitelinks=4; wikidata:Q3662506 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 374 elements); data/traces/castle-of-brescia-q3662506.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
