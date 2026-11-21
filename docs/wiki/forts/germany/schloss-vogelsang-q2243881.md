# Schloss Vogelsang

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-vogelsang-q2243881` |
| Coordinates | 53.72839, 14.16571 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.72839/14.16571)) |
| Wikidata | [Q2243881](https://www.wikidata.org/wiki/Q2243881) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Vogelsang-Warsin |
| Designations | architectural heritage monument in Mecklenburg-Vorpommern |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 56 elements (outline 1, road 20, building 14, waterway 18, zone 3).

Evidence: documented 0, mapped 56, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/37216251 historic=castle Q2243881 6 m from ledger point
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.72839/14.16571) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q2243881 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 56 elements); data/traces/schloss-vogelsang-q2243881.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
