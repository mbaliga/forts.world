# Saint Michael's Castle

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `saint-michael-s-castle-q2000542` |
| Coordinates | 59.94042, 30.33764 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.94042/30.33764)) |
| Wikidata | [Q2000542](https://www.wikidata.org/wiki/Q2000542) (CC0) |
| Wikidata class | castle |
| Types | palace\|castle\|museum building |
| Administrative area | Saint Petersburg |
| Inception | 1801 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 32 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.rusmuseum.ru/mikhailovsky-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, marker 13, waterway 4, water 2, building 31, road 252, retaining-wall 15, zone 10, wall 1).

Evidence: documented 0, mapped 329, inferred 0, derived 0; heights documented 21, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/238571 historic=castle Q2000542 4 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.94042/30.33764) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; palace\|castle\|museum building; sitelinks=32; wikidata:Q2000542 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 329 elements); data/traces/saint-michael-s-castle-q2000542.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
