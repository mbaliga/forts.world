# Castle of Crato

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-crato-q5049848` |
| Coordinates | 39.28461, -7.64291 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.28461/-7.64291)) |
| Wikidata | [Q5049848](https://www.wikidata.org/wiki/Q5049848) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Crato e Mártires, Flor da Rosa e Vale do Peso |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 272 elements (outline 1, road 42, wall 42, waterway 1, building 184, retaining-wall 1).

Evidence: documented 0, mapped 272, inferred 0, derived 0; heights documented 0, inferred 0, unknown 228.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13242706 historic=castle Q5049848 26 m from ledger point
- origin moved 35 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.28461/-7.64291) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=3; wikidata:Q5049848 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 272 elements); data/traces/castle-of-crato-q5049848.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
