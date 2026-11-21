# Pharaoh's Island

> Egypt · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pharaoh-s-island-q933219` |
| Coordinates | 29.46284, 34.86005 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/29.46284/34.86005)) |
| Wikidata | [Q933219](https://www.wikidata.org/wiki/Q933219) (CC0) |
| Wikidata class | castle |
| Types | archaeological site\|island\|crusader castle |
| Administrative area | South Sinai Governorate |
| Designations | Tentative World Heritage Site |
| Wikipedia language editions | 27 |
| OSM `historic` | castle |
| OSM `ruins` | yes |
| OSM `website` | https://en.wikipedia.org/wiki/Castle_of_Saladin,_Pharaohs_Island |

## What the model contains

Tier **T1**, status `outline-only`, 6 elements (outline 1, road 1, coastline 2, water 2).

Evidence: documented 0, mapped 6, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/463131245 historic=castle 72 m from ledger point
- origin moved 71 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1314,"medianInside":2.7,"medianOutside":10}
- 19 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/29.46284/34.86005) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; archaeological site\|island\|crusader castle; sitelinks=27; wikidata:Q933219 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 6 elements); data/traces/pharaoh-s-island-q933219.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/egypt.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
