# San Felipe Castle

> Venezuela · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `san-felipe-castle-q2941437` |
| Coordinates | 10.48406, -68.01059 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/10.48406/-68.01059)) |
| Wikidata | [Q2941437](https://www.wikidata.org/wiki/Q2941437) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Puerto Cabello |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 43 elements (outline 1, building 17, road 18, coastline 2, zone 2, wall 2, water 1).

Evidence: documented 0, mapped 43, inferred 0, derived 1; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12166419 historic=fort Q2941437 26 m from ledger point
- origin moved 29 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":297,"medianInside":0.5,"medianOutside":3}
- 13 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/10.48406/-68.01059) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q2941437 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 43 elements); data/traces/san-felipe-castle-q2941437.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/venezuela.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
