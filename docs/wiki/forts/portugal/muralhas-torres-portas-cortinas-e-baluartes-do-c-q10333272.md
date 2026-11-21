# Muralhas, torres, portas, cortinas e baluartes do Centro Histórico de Setúbal

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralhas-torres-portas-cortinas-e-baluartes-do-c-q10333272` |
| Coordinates | 38.52336, -8.88662 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.52336/-8.88662)) |
| Wikidata | [Q10333272](https://www.wikidata.org/wiki/Q10333272) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|cultural heritage |
| Administrative area | Setubal (São Julião, Nossa Senhora da Anunciada e Santa Maria da Graça) |
| Designations | Monument of Public Interest |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, marker 2, road 358, building 698, wall 42, zone 5, retaining-wall 10, waterway 1).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 0, inferred 0, unknown 172.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/16949810 historic=castle 38 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 698 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 358 mapped (trace size budget); minor lanes are not drawn
- origin moved 36 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.52336/-8.88662) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|cultural heritage; sitelinks=2; wikidata:Q10333272 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/muralhas-torres-portas-cortinas-e-baluartes-do-c-q10333272.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
