# Palmela Palace

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palmela-palace-q66814218` |
| Coordinates | 38.70108, -9.4135 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.70108/-9.4135)) |
| Wikidata | [Q66814218](https://www.wikidata.org/wiki/Q66814218) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Cascais e Estoril |
| Inception | 1873 |
| Designations | Monument of Public Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 151 elements (outline 1, road 69, retaining-wall 6, wall 7, building 59, waterway 1, zone 4, water 3, coastline 1).

Evidence: documented 0, mapped 151, inferred 0, derived 1; heights documented 0, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/556180400 historic=castle Q66814218 2 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":188,"medianInside":0,"medianOutside":20.5}
- 33 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.70108/-9.4135) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=3; wikidata:Q66814218 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 151 elements); data/traces/palmela-palace-q66814218.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
