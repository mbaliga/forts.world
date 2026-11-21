# Castle of Almeida

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-almeida-q5049743` |
| Coordinates | 40.72557, -6.90742 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.72557/-6.90742)) |
| Wikidata | [Q5049743](https://www.wikidata.org/wiki/Q5049743) (CC0) |
| Wikidata class | ruin |
| Types | cultural heritage\|castle ruin |
| Administrative area | Almeida |
| Inception | 1641 |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 7 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 363 elements (outline 1, marker 5, road 226, wall 80, building 149, zone 5, retaining-wall 2).

Evidence: documented 0, mapped 363, inferred 0, derived 0; heights documented 0, inferred 0, unknown 202.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20995183 historic=citywalls Q10353227 98 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 149 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 226 mapped (trace size budget); minor lanes are not drawn
- origin moved 129 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.72557/-6.90742) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; cultural heritage\|castle ruin; sitelinks=7; wikidata:Q5049743 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 363 elements); data/traces/castle-of-almeida-q5049743.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
