# Fort Vijfhuizen

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-vijfhuizen-q2780274` |
| Coordinates | 52.3474, 4.67069 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.3474/4.67069)) |
| Wikidata | [Q2780274](https://www.wikidata.org/wiki/Q2780274) (CC0) |
| Wikidata class | fort |
| Types | fort\|museum\|fort |
| Administrative area | Haarlemmermeer |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 225 elements (outline 1, road 79, building 74, waterway 7, zone 35, water 21, retaining-wall 8).

Evidence: documented 0, mapped 225, inferred 0, derived 0; heights documented 5, inferred 0, unknown 77.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1429165482 historic=fort Q2780274 7 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- 890 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.3474/4.67069) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|museum\|fort; sitelinks=5; wikidata:Q2780274 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 225 elements); data/traces/fort-vijfhuizen-q2780274.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
