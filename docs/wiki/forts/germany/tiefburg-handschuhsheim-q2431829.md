# Tiefburg Handschuhsheim

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tiefburg-handschuhsheim-q2431829` |
| Coordinates | 49.4282, 8.68611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.4282/8.68611)) |
| Wikidata | [Q2431829](https://www.wikidata.org/wiki/Q2431829) (CC0) |
| Wikidata class | ruin |
| Types | water castle\|castle ruin |
| Administrative area | Heidelberg |
| Inception | 1300 |
| Designations | cultural heritage monument in Baden-Württemberg |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 269 elements (outline 1, marker 3, road 114, building 615, wall 24, zone 6, waterway 1).

Evidence: documented 0, mapped 269, inferred 0, derived 0; heights documented 64, inferred 0, unknown 80.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1434622541 historic=castle 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 615 mapped (trace size budget); the rest of the town is not drawn
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.4282/8.68611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; water castle\|castle ruin; sitelinks=3; wikidata:Q2431829 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 269 elements); data/traces/tiefburg-handschuhsheim-q2431829.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
