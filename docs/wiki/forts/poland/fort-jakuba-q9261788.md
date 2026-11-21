# Fort Jakuba

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-jakuba-q9261788` |
| Coordinates | 53.0132, 18.6213 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.0132/18.6213)) |
| Wikidata | [Q9261788](https://www.wikidata.org/wiki/Q9261788) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Toruń |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 189 elements (outline 1, marker 1, road 401, zone 113, building 179, retaining-wall 14, wall 1, waterway 1).

Evidence: documented 0, mapped 189, inferred 0, derived 0; heights documented 5, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/260849271 historic=building 126 m from ledger point
- pruned to the outline plus 150 m: 711 -> 297 elements
- roads capped: kept the 80 longest of 188 mapped (trace size budget); minor lanes are not drawn
- origin moved 126 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.0132/18.6213) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q9261788 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 189 elements); data/traces/fort-jakuba-q9261788.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
