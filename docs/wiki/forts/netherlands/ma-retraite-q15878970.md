# Ma Retraite

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ma-retraite-q15878970` |
| Coordinates | 52.09217, 5.2259 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.09217/5.2259)) |
| Wikidata | [Q15878970](https://www.wikidata.org/wiki/Q15878970) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|mansion |
| Administrative area | Zeist |
| Inception | 1901 |
| Designations | Rijksmonument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 207 elements (outline 1, road 57, zone 28, water 1, building 421).

Evidence: documented 0, mapped 207, inferred 0, derived 0; heights documented 3, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/273748195 historic=castle Q15878970 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 421 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.09217/5.2259) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|mansion; sitelinks=2; wikidata:Q15878970 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 207 elements); data/traces/ma-retraite-q15878970.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
