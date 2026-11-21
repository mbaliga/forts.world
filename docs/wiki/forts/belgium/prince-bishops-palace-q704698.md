# Prince-Bishops' Palace

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `prince-bishops-palace-q704698` |
| Coordinates | 50.64616, 5.574 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.64616/5.574)) |
| Wikidata | [Q704698](https://www.wikidata.org/wiki/Q704698) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Liège |
| Inception | 1526. |
| Designations | Tentative World Heritage Site\|protected heritage property in Wallonia\|Exceptional heritage property of Wallonia |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 377 elements (outline 1, marker 9, road 327, building 574, zone 5, retaining-wall 33, waterway 2, wall 57).

Evidence: documented 0, mapped 377, inferred 0, derived 0; heights documented 21, inferred 0, unknown 189.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21395766 historic=castle Q704698 27 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 574 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 327 mapped (trace size budget); minor lanes are not drawn
- origin moved 13 m from the ledger point to the centre of the mapped site
- 43 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.64616/5.574) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=12; wikidata:Q704698 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 377 elements); data/traces/prince-bishops-palace-q704698.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
