# Saint-Jean Gate

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `saint-jean-gate-q3398955` |
| Coordinates | 48.6897, 6.17714 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.6897/6.17714)) |
| Wikidata | [Q3398955](https://www.wikidata.org/wiki/Q3398955) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|destroyed building or structure |
| Administrative area | Nancy |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 3 |
| OSM `website` | https://www.pop.culture.gouv.fr/notice/merimee/PA00132624 |

## What the model contains

Tier **T1**, status `outline+walls`, 347 elements (outline 1, marker 8, road 498, building 191, wall 8, zone 60).

Evidence: documented 0, mapped 347, inferred 0, derived 0; heights documented 20, inferred 0, unknown 108.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/41051494 historic=building Q15950457 35 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 191 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 498 mapped (trace size budget); minor lanes are not drawn
- origin moved 34 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.6897/6.17714) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|destroyed building or structure; sitelinks=2; wikidata:Q3398955 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 347 elements); data/traces/saint-jean-gate-q3398955.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
