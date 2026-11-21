# Condes de Castro Guimarães Palace

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `condes-de-castro-guimaraes-palace-q10344066` |
| Coordinates | 38.6921, -9.4217 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.6921/-9.4217)) |
| Wikidata | [Q10344066](https://www.wikidata.org/wiki/Q10344066) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace\|cultural heritage |
| Administrative area | Cascais e Estoril |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 220 elements (outline 1, marker 1, coastline 1, wall 4, road 107, cliff 4, building 87, zone 6, water 4, retaining-wall 2, waterway 3).

Evidence: documented 0, mapped 220, inferred 0, derived 2; heights documented 2, inferred 0, unknown 91.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7943775 historic=castle Q10344066 8 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":23,"medianInside":0.1,"medianOutside":14.6}
- sea-1: DEM check ok {"cells":20,"medianInside":0.8,"medianOutside":14.6}
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.6921/-9.4217) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace\|cultural heritage; sitelinks=5; wikidata:Q10344066 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 220 elements); data/traces/condes-de-castro-guimaraes-palace-q10344066.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
