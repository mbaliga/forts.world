# Fort of Magdalena Barcelona

> Venezuela · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-magdalena-barcelona-q108178058` |
| Coordinates | 10.20944, -64.71278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/10.20944/-64.71278)) |
| Wikidata | [Q108178058](https://www.wikidata.org/wiki/Q108178058) (CC0) |
| Wikidata class | fort |
| Types | tourism\|fortification |
| Inception | 1799 |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 7 elements (outline 1, coastline 1, road 4, water 1).

Evidence: documented 0, mapped 7, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/107137917 historic=fort 11 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":183,"medianInside":13.6,"medianOutside":31.4}
- 149 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/10.20944/-64.71278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; tourism\|fortification; sitelinks=2; wikidata:Q108178058 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 7 elements); data/traces/fort-of-magdalena-barcelona-q108178058.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/venezuela.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
