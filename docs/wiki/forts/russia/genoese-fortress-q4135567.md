# Genoese Fortress

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `genoese-fortress-q4135567` |
| Coordinates | 44.84155, 34.95785 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.84155/34.95785)) |
| Wikidata | [Q4135567](https://www.wikidata.org/wiki/Q4135567) (CC0) |
| Wikidata class | fort |
| Types | museum\|fortress |
| Administrative area | Sudak |
| Inception | 1371 |
| Designations | State Register of Immovable Monuments of Ukraine\|Tentative World Heritage Site\|federal cultural heritage site in Russia |
| Wikipedia language editions | 27 |
| OSM `historic` | castle |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 294 elements (outline 1, marker 1, road 126, wall 20, building 294, cliff 4, coastline 9, waterway 1, zone 11, water 1).

Evidence: documented 0, mapped 294, inferred 0, derived 1; heights documented 12, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8441540 historic=castle Q4135567 66 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 294 mapped (trace size budget); the rest of the town is not drawn
- origin moved 65 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":269,"medianInside":2,"medianOutside":48.3}
- 9 DEM cells below -3 m (bathymetry) clamped to -3 m
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.84155/34.95785) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|fortress; sitelinks=27; wikidata:Q4135567 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 294 elements); data/traces/genoese-fortress-q4135567.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
