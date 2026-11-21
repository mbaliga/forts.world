# Kraton Ngayogyakarta Hadiningrat

> Indonesia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kraton-ngayogyakarta-hadiningrat-q10778917` |
| Coordinates | -7.80782, 110.36361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-7.80782/110.36361)) |
| Wikidata | [Q10778917](https://www.wikidata.org/wiki/Q10778917) (CC0) |
| Wikidata class | castle |
| Types | castle\|kraton |
| Administrative area | Yogyakarta |
| Inception | 1756 |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `website` | https://www.kratonjogja.id/ |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 1, road 217, building 3388, wall 10, zone 2).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 1, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/542298637 historic=castle Q10778917 35 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 3388 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 217 mapped (trace size budget); minor lanes are not drawn
- origin moved 32 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-7.80782/110.36361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|kraton; sitelinks=20; wikidata:Q10778917 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/kraton-ngayogyakarta-hadiningrat-q10778917.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
