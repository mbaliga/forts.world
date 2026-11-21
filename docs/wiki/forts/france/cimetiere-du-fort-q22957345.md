# cimetière du Fort

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cimetiere-du-fort-q22957345` |
| Coordinates | 14.75297, -61.18051 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/14.75297/-61.18051)) |
| Wikidata | [Q22957345](https://www.wikidata.org/wiki/Q22957345) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|cemetery |
| Administrative area | Saint-Pierre |
| Inception | C17 |
| Designations | classified historical monument |
| Wikipedia language editions | 0 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 263 elements (outline 1, marker 1, coastline 1, road 29, zone 1, building 224, waterway 3, water 3).

Evidence: documented 0, mapped 263, inferred 0, derived 1; heights documented 0, inferred 0, unknown 224.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/928125314 historic=ruins 23 m from ledger point
- origin moved 18 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":132,"medianInside":3,"medianOutside":30.6}
- 22 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/14.75297/-61.18051) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|cemetery; sitelinks=0; wikidata:Q22957345 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 263 elements); data/traces/cimetiere-du-fort-q22957345.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
