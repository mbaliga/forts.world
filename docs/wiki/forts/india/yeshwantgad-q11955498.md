# Yeshwantgad

> India · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `yeshwantgad-q11955498` |
| Coordinates | 16.6297, 73.35725 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/16.6297/73.35725)) |
| Wikidata | [Q11955498](https://www.wikidata.org/wiki/Q11955498) (CC0) |
| Wikidata class | fort |
| Types | island\|fortress |
| Administrative area | Ratnagiri district |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 3 elements (outline 1, road 1, waterway 1).

Evidence: documented 0, mapped 3, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1019628964 historic=fort 147 m from ledger point
- origin moved 140 m from the ledger point to the outline centroid
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/16.6297/73.35725) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; island\|fortress; sitelinks=4; wikidata:Q11955498; South Asia site missing from the programme (no programme row within 2 km sharing a name word) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 3 elements); data/traces/yeshwantgad-q11955498.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
