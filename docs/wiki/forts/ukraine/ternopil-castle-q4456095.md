# Ternopil Castle

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ternopil-castle-q4456095` |
| Coordinates | 49.55333, 25.5875 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.55333/25.5875)) |
| Wikidata | [Q4456095](https://www.wikidata.org/wiki/Q4456095) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Ternopil |
| Inception | 1548 |
| Designations | architectural monument of national significance of Ukraine |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `description` | Памятка архітектури XVI ст. |

## What the model contains

Tier **T1**, status `outline+walls`, 252 elements (outline 1, marker 6, road 151, building 48, water 3, zone 36, wall 1, cliff 5, retaining-wall 1).

Evidence: documented 0, mapped 252, inferred 0, derived 0; heights documented 15, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/103991819 historic=castle Q4456095 13 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.55333/25.5875) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q4456095 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 252 elements); data/traces/ternopil-castle-q4456095.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
