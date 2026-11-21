# Castle of Charles V

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-charles-v-q3662651` |
| Coordinates | 40.35239, 18.17463 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.35239/18.17463)) |
| Wikidata | [Q3662651](https://www.wikidata.org/wiki/Q3662651) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Lecce |
| Inception | 1539 |
| Designations | Italian national heritage |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | http://www.castellocarlov.it/ |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 4, road 245, building 138, zone 9, wall 37).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 74, inferred 0, unknown 83.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3987172 historic=castle Q3662651 30 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 138 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 245 mapped (trace size budget); minor lanes are not drawn
- origin moved 22 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.35239/18.17463) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q3662651 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/castle-of-charles-v-q3662651.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
