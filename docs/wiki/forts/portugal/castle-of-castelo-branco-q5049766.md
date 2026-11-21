# Castle of Castelo Branco

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-castelo-branco-q5049766` |
| Coordinates | 39.82546, -7.49613 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.82546/-7.49613)) |
| Wikidata | [Q5049766](https://www.wikidata.org/wiki/Q5049766) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Castelo Branco |
| Inception | 1214 |
| Designations | heritage without legal protection |
| Wikipedia language editions | 7 |
| OSM `historic` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 253 elements (outline 1, marker 2, road 85, zone 11, building 148, wall 4, water 1).

Evidence: documented 0, mapped 253, inferred 0, derived 0; heights documented 2, inferred 0, unknown 151.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/552849675 historic=yes 5 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.82546/-7.49613) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=7; wikidata:Q5049766 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 253 elements); data/traces/castle-of-castelo-branco-q5049766.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
