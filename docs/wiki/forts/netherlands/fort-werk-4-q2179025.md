# Fort Werk 4

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-werk-4-q2179025` |
| Coordinates | 52.27137, 5.17592 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.27137/5.17592)) |
| Wikidata | [Q2179025](https://www.wikidata.org/wiki/Q2179025) (CC0) |
| Wikidata class | fort |
| Types | fort\|fortification |
| Administrative area | Gooise Meren |
| Inception | 1870 |
| Designations | part of UNESCO World Heritage Site\|Rijksmonument |
| UNESCO WHC id | 759bis-006 |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 224 elements (outline 1, road 82, zone 10, wall 9, building 549, retaining-wall 2).

Evidence: documented 0, mapped 224, inferred 0, derived 0; heights documented 0, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/173344527 historic=fort Q2179025 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 549 mapped (trace size budget); the rest of the town is not drawn
- origin moved 24 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.27137/5.17592) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|fortification; sitelinks=2; wikidata:Q2179025 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 224 elements); data/traces/fort-werk-4-q2179025.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
