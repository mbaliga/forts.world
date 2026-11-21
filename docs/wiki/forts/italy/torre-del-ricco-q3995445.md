# Torre del Ricco

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-ricco-q3995445` |
| Coordinates | 39.86746, 18.39383 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.86746/18.39383)) |
| Wikidata | [Q3995445](https://www.wikidata.org/wiki/Q3995445) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|tower |
| Administrative area | Corsano |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline-only`, 22 elements (outline 1, marker 1, road 6, coastline 2, building 10, zone 1, water 1).

Evidence: documented 0, mapped 22, inferred 0, derived 1; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/379153102 historic=building 155 m from ledger point
- origin moved 155 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":166,"medianInside":0,"medianOutside":33.8}
- 26 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.86746/18.39383) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|tower; sitelinks=1; wikidata:Q3995445 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 22 elements); data/traces/torre-del-ricco-q3995445.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
