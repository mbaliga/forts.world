# Fort Taillefer

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-taillefer-q22997258` |
| Coordinates | 47.36389, -3.15806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.36389/-3.15806)) |
| Wikidata | [Q22997258](https://www.wikidata.org/wiki/Q22997258) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Le Palais |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 33 elements (outline 1, marker 1, coastline 3, road 6, building 11, wall 5, zone 5, water 1).

Evidence: documented 0, mapped 33, inferred 0, derived 1; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/527894992 historic=yes 31 m from ledger point
- origin moved 31 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":214,"medianInside":0,"medianOutside":0}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.36389/-3.15806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q22997258 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 33 elements); data/traces/fort-taillefer-q22997258.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
