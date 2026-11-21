# Wollweberturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wollweberturm-q110799936` |
| Coordinates | 51.27422, 8.86904 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.27422/8.86904)) |
| Wikidata | [Q110799936](https://www.wikidata.org/wiki/Q110799936) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Korbach |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | yes |
| OSM `description` | Wollweberturm oder Herrschaftliche Turm in Korbach, Teil der mittelalterlichen Stadtbefestigung. |

## What the model contains

Tier **T1**, status `outline+walls`, 290 elements (outline 1, marker 2, road 186, zone 2, wall 13, building 242, retaining-wall 1, waterway 1).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 7, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/38716277 historic=yes 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 242 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 186 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.27422/8.86904) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q110799936 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 290 elements); data/traces/wollweberturm-q110799936.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
