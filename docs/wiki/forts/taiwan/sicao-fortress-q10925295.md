# Sicao Fortress

> Taiwan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sicao-fortress-q10925295` |
| Coordinates | 23.01891, 120.1343 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.01891/120.1343)) |
| Wikidata | [Q10925295](https://www.wikidata.org/wiki/Q10925295) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Annan District |
| Wikipedia language editions | 4 |
| OSM `historic` | tomb |

## What the model contains

Tier **T1**, status `outline-only`, 70 elements (outline 1, road 19, waterway 3, zone 26, building 14, water 7).

Evidence: documented 0, mapped 70, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/490467346 historic=tomb 214 m from ledger point
- origin moved 214 m from the ledger point to the outline centroid
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.01891/120.1343) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q10925295 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 70 elements); data/traces/sicao-fortress-q10925295.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/taiwan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
