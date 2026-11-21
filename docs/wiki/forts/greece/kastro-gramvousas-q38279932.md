# Kastro Gramvousas

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kastro-gramvousas-q38279932` |
| Coordinates | 35.60915, 23.57601 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.60915/23.57601)) |
| Wikidata | [Q38279932](https://www.wikidata.org/wiki/Q38279932) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Kissamos Municipality |
| Inception | 1584 |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `description` | Ενετικό κάστρο που αποτέλεσε και ορμητήριο πειρατών και επαναστατών και έδρα της Επαναστατικής Επιτροπής Κρήτης. |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 18 elements (outline 1, marker 1, coastline 1, road 7, cliff 3, wall 1, building 2, water 2).

Evidence: documented 0, mapped 18, inferred 0, derived 2; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/27736979 historic=castle 72 m from ledger point
- origin moved 75 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":16,"medianInside":10,"medianOutside":26.8}
- sea-1: DEM check ok {"cells":123,"medianInside":0,"medianOutside":41.7}
- 74 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.60915/23.57601) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=4; wikidata:Q38279932 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 18 elements); data/traces/kastro-gramvousas-q38279932.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
