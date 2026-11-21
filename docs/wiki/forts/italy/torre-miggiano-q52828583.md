# Torre Miggiano

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-miggiano-q52828583` |
| Coordinates | 40.03044, 18.45007 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.03044/18.45007)) |
| Wikidata | [Q52828583](https://www.wikidata.org/wiki/Q52828583) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|tower |
| Administrative area | Santa Cesarea Terme |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 25 elements (outline 1, building 8, road 10, wall 3, coastline 1, cliff 1, water 1).

Evidence: documented 0, mapped 25, inferred 0, derived 1; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/399019587 historic=ruins Q52828583 0 m from ledger point
- sea-0: DEM check ok {"cells":198,"medianInside":0,"medianOutside":9.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.03044/18.45007) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|tower; sitelinks=1; wikidata:Q52828583 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 25 elements); data/traces/torre-miggiano-q52828583.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
