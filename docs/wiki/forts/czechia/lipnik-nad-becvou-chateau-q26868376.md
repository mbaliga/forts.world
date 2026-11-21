# Lipník nad Bečvou chateau

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lipnik-nad-becvou-chateau-q26868376` |
| Coordinates | 49.52478, 17.58098 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.52478/17.58098)) |
| Wikidata | [Q26868376](https://www.wikidata.org/wiki/Q26868376) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Lipník nad Bečvou I-Město |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 5, road 462, building 209, waterway 2, zone 131, wall 46, retaining-wall 10).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 27, inferred 0, unknown 74.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/165438256 historic=castle Q26868376 8 m from ledger point
- pruned to the outline plus 150 m: 866 -> 565 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 133 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 288 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.52478/17.58098) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q26868376 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/lipnik-nad-becvou-chateau-q26868376.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
