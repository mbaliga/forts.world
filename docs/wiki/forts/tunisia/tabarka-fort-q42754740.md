# Tabarka Fort

> Tunisia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tabarka-fort-q42754740` |
| Coordinates | 36.9653, 8.75872 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.9653/8.75872)) |
| Wikidata | [Q42754740](https://www.wikidata.org/wiki/Q42754740) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Tabarka |
| Inception | 1600 |
| Designations | listed monument of Tunisia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 20 elements (outline 1, marker 1, coastline 2, zone 1, road 8, building 5, water 2).

Evidence: documented 0, mapped 20, inferred 0, derived 2; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/185767864 historic=castle 22 m from ledger point
- origin moved 22 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":55,"medianInside":4.6,"medianOutside":17}
- sea-1: DEM check ok {"cells":428,"medianInside":5.6,"medianOutside":26.2}
- 46 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.9653/8.75872) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q42754740 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline-only, 20 elements); data/traces/tabarka-fort-q42754740.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/tunisia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
