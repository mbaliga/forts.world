# Beehive Casemate

> Australia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `beehive-casemate-q4879793` |
| Coordinates | -33.8275, 151.268 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-33.8275/151.268)) |
| Wikidata | [Q4879793](https://www.wikidata.org/wiki/Q4879793) (CC0) |
| Wikidata class | fort |
| Types | fortification\|barracks |
| Administrative area | New South Wales |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 66 elements (outline 1, marker 6, road 38, zone 2, building 14, waterway 2, retaining-wall 3).

Evidence: documented 0, mapped 66, inferred 0, derived 0; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1301066888 historic=fort 241 m from ledger point
- origin moved 241 m from the ledger point to the centre of the mapped site
- 9 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-33.8275/151.268) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|barracks; sitelinks=3; wikidata:Q4879793 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 66 elements); data/traces/beehive-casemate-q4879793.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/australia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
