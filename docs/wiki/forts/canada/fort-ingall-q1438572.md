# Fort Ingall

> Canada · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-ingall-q1438572` |
| Coordinates | 47.69417, -68.90139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.69417/-68.90139)) |
| Wikidata | [Q1438572](https://www.wikidata.org/wiki/Q1438572) (CC0) |
| Wikidata class | fort |
| Types | fort\|archaeological site\|military museum |
| Administrative area | Témiscouata-sur-le-Lac |
| Inception | 1839 |
| Designations | classified heritage site |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 64 elements (outline 1, marker 2, road 39, zone 2, wall 1, building 17, waterway 2).

Evidence: documented 0, mapped 64, inferred 0, derived 0; heights documented 7, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20415259 historic=castle Q1438572 321 m from ledger point
- origin moved 322 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.69417/-68.90139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|archaeological site\|military museum; sitelinks=5; wikidata:Q1438572 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 64 elements); data/traces/fort-ingall-q1438572.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
