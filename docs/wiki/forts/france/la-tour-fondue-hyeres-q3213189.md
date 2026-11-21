# La Tour Fondue, Hyères

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `la-tour-fondue-hyeres-q3213189` |
| Coordinates | 43.0261, 6.15556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.0261/6.15556)) |
| Wikidata | [Q3213189](https://www.wikidata.org/wiki/Q3213189) (CC0) |
| Wikidata class | fort |
| Types | blockhouse |
| Administrative area | Hyères |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 64 elements (outline 1, road 41, wall 1, coastline 5, building 14, retaining-wall 1, water 1).

Evidence: documented 0, mapped 64, inferred 0, derived 1; heights documented 12, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6198014 historic=fort 29 m from ledger point
- origin moved 22 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":368,"medianInside":0,"medianOutside":0}
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.0261/6.15556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; blockhouse; sitelinks=2; wikidata:Q3213189 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 64 elements); data/traces/la-tour-fondue-hyeres-q3213189.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
