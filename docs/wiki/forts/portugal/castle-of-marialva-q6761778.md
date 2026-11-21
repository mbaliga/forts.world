# Castle of Marialva

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-marialva-q6761778` |
| Coordinates | 40.91348, -7.23156 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.91348/-7.23156)) |
| Wikidata | [Q6761778](https://www.wikidata.org/wiki/Q6761778) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Marialva |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `description` | Arquitectura militar, românica e gótica. Castelo e cerca urbana muralhada, de defesa passiva, de traçado irregular ovalado, envolvendo recinto da cidadela de traçado também irregular. Torre de menagem isolada e de planta trapezoidal. Torres de plant |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 139 elements (outline 1, marker 9, road 71, zone 6, building 20, wall 31).

Evidence: documented 0, mapped 139, inferred 0, derived 0; heights documented 0, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1434695506 historic=castle Q6761778 18 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.91348/-7.23156) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=5; wikidata:Q6761778 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 139 elements); data/traces/castle-of-marialva-q6761778.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
