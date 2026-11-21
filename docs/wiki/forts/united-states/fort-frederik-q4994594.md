# Fort Frederik

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-frederik-q4994594` |
| Coordinates | 17.71526, -64.88345 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/17.71526/-64.88345)) |
| Wikidata | [Q4994594](https://www.wikidata.org/wiki/Q4994594) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Saint Croix District |
| Designations | National Register of Historic Places listed place\|National Register of Historic Places contributing property\|National Historic Landmark |
| Wikipedia language editions | 9 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 80 elements (outline 1, road 23, coastline 2, building 50, retaining-wall 1, water 3).

Evidence: documented 0, mapped 80, inferred 0, derived 3; heights documented 0, inferred 0, unknown 51.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/253996422 historic=fort Q4994594 4 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":400,"medianInside":3,"medianOutside":3}
- sea-1: DEM check ok {"cells":127,"medianInside":1.4,"medianOutside":3}
- sea-2: DEM check failed {"cells":35,"medianInside":3.1,"medianOutside":3}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/17.71526/-64.88345) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=9; wikidata:Q4994594 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 80 elements); data/traces/fort-frederik-q4994594.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
