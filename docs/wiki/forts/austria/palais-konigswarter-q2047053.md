# Palais Königswarter

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-konigswarter-q2047053` |
| Coordinates | 48.20177, 16.3703 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.20177/16.3703)) |
| Wikidata | [Q2047053](https://www.wikidata.org/wiki/Q2047053) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Vienna |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, marker 3, road 636, building 60, zone 49, retaining-wall 17, waterway 1, wall 5).

Evidence: documented 0, mapped 286, inferred 0, derived 0; heights documented 54, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/151158 historic=castle Q2047053 6 m from ledger point
- roads capped: kept the 150 longest of 636 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.20177/16.3703) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=3; wikidata:Q2047053 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/palais-konigswarter-q2047053.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
