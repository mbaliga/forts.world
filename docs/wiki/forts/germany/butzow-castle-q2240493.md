# Bützow Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `butzow-castle-q2240493` |
| Coordinates | 53.84705, 11.97646 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.84705/11.97646)) |
| Wikidata | [Q2240493](https://www.wikidata.org/wiki/Q2240493) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Bützow |
| Designations | architectural heritage monument in Mecklenburg-Vorpommern |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | http://www.schloss-buetzow.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 191 elements (outline 1, road 81, waterway 2, building 104, water 1, wall 2).

Evidence: documented 0, mapped 191, inferred 0, derived 0; heights documented 6, inferred 0, unknown 100.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/111762972 historic=castle Q2240493 2 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- 144 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.84705/11.97646) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=4; wikidata:Q2240493 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 191 elements); data/traces/butzow-castle-q2240493.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
