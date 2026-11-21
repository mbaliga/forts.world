# Fort de la Fraternité

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-la-fraternite-q3078304` |
| Coordinates | 48.30788, -4.57269 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.30788/-4.57269)) |
| Wikidata | [Q3078304](https://www.wikidata.org/wiki/Q3078304) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Roscanvel |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 40 elements (outline 1, marker 1, road 29, building 3, coastline 1, wall 2, waterway 1, water 2).

Evidence: documented 0, mapped 40, inferred 0, derived 2; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/253815755 historic=fort 132 m from ledger point
- origin moved 134 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":30,"medianInside":0,"medianOutside":16.4}
- sea-1: DEM check ok {"cells":87,"medianInside":0,"medianOutside":19.2}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.30788/-4.57269) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q3078304 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 40 elements); data/traces/fort-de-la-fraternite-q3078304.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
