# Castle of Abrantes

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-abrantes-q3695846` |
| Coordinates | 39.46446, -8.19482 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.46446/-8.19482)) |
| Wikidata | [Q3695846](https://www.wikidata.org/wiki/Q3695846) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Abrantes (São Vicente e São João) e Alferrarede |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 251 elements (outline 1, marker 1, road 62, building 181, retaining-wall 1, wall 4).

Evidence: documented 0, mapped 251, inferred 0, derived 0; heights documented 0, inferred 0, unknown 187.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/127654558 historic=castle Q3695846 15 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.46446/-8.19482) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=7; wikidata:Q3695846 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 251 elements); data/traces/castle-of-abrantes-q3695846.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
