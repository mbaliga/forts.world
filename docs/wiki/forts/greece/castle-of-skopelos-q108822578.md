# Castle of Skopelos

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-skopelos-q108822578` |
| Coordinates | 39.12463, 23.7273 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.12463/23.7273)) |
| Wikidata | [Q108822578](https://www.wikidata.org/wiki/Q108822578) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Magnesia Regional Unit |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 155 elements (outline 1, marker 1, road 102, coastline 4, zone 10, building 15, cliff 7, retaining-wall 9, wall 4, water 2).

Evidence: documented 0, mapped 155, inferred 0, derived 2; heights documented 0, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1550559253 historic=archaeological_site Q108822578 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":16,"medianInside":0.6,"medianOutside":28.3}
- sea-1: DEM check ok {"cells":61,"medianInside":0,"medianOutside":34.4}
- 28 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.12463/23.7273) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q108822578 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 155 elements); data/traces/castle-of-skopelos-q108822578.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
