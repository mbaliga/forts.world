# Castle of the Moors

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-the-moors-q1049008` |
| Coordinates | 38.79254, -9.3896 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.79254/-9.3896)) |
| Wikidata | [Q1049008](https://www.wikidata.org/wiki/Q1049008) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Sintra (Santa Maria e São Miguel, São Martinho e São Pedro de Penaferrim) |
| Inception | 0800 |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 22 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 154 elements (outline 1, marker 2, road 94, building 17, wall 11, zone 19, retaining-wall 9, waterway 1).

Evidence: documented 0, mapped 154, inferred 0, derived 0; heights documented 0, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10347729 historic=castle Q1049008 37 m from ledger point
- origin moved 41 m from the ledger point to the outline centroid
- 65 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.79254/-9.3896) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=22; wikidata:Q1049008 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 154 elements); data/traces/castle-of-the-moors-q1049008.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
