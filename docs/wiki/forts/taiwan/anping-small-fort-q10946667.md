# Anping Small Fort

> Taiwan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `anping-small-fort-q10946667` |
| Coordinates | 22.9995, 120.159 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.9995/120.159)) |
| Wikidata | [Q10946667](https://www.wikidata.org/wiki/Q10946667) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Anping District |
| Inception | 1841 |
| Designations | Historic Sites at the Municipality Level (Taiwan) |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 75 elements (outline 1, marker 2, water 5, road 48, wall 2, waterway 1, coastline 2, building 10, zone 4).

Evidence: documented 0, mapped 75, inferred 0, derived 2; heights documented 3, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1248770199 historic=fort Q10946667 39 m from ledger point
- origin moved 40 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":82,"medianInside":-4.4,"medianOutside":1.6}
- sea-1: DEM check failed {"cells":9,"medianInside":1.7,"medianOutside":0.9}
- 282 DEM cells below -3 m (bathymetry) clamped to -3 m
- 20 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.9995/120.159) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q10946667 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 75 elements); data/traces/anping-small-fort-q10946667.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/taiwan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
