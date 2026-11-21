# Castle in Agropoli

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-in-agropoli-q108322730` |
| Coordinates | 40.35332, 14.98807 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.35332/14.98807)) |
| Wikidata | [Q108322730](https://www.wikidata.org/wiki/Q108322730) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Agropoli |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 221 elements (outline 1, marker 1, coastline 1, road 58, cliff 1, building 150, wall 5, retaining-wall 2, water 2).

Evidence: documented 0, mapped 221, inferred 0, derived 2; heights documented 0, inferred 0, unknown 157.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18910097 historic=castle 17 m from ledger point
- origin moved 17 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":23,"medianInside":-1638.3,"medianOutside":-1638.3}
- sea-1: DEM check failed {"cells":2,"medianInside":-1638.3,"medianOutside":-1638.3}
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.35332/14.98807) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q108322730 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 221 elements); data/traces/castle-in-agropoli-q108322730.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
