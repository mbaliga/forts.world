# Fort of Saint Peter

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-saint-peter-q116910339` |
| Coordinates | 28.46935, -16.24728 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.46935/-16.24728)) |
| Wikidata | [Q116910339](https://www.wikidata.org/wiki/Q116910339) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Santa Cruz de Tenerife |
| Inception | 1656 |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 226 elements (outline 1, road 158, water 1, wall 8, building 49, waterway 1, zone 3, coastline 2, retaining-wall 3).

Evidence: documented 0, mapped 226, inferred 0, derived 0; heights documented 10, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/82897302 historic=yes 217 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 217 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.46935/-16.24728) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q116910339 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 226 elements); data/traces/fort-of-saint-peter-q116910339.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
