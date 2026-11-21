# Fort Philip

> Australia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-philip-q5471821` |
| Coordinates | -33.8595, 151.205 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-33.8595/151.205)) |
| Wikidata | [Q5471821](https://www.wikidata.org/wiki/Q5471821) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | New South Wales |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `description` | former tram shelter |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 11, road 367, building 253, zone 11, wall 7, retaining-wall 14).

Evidence: documented 0, mapped 314, inferred 0, derived 0; heights documented 106, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1151103512 historic=building 141 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 253 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 367 mapped (trace size budget); minor lanes are not drawn
- origin moved 140 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-33.8595/151.205) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q5471821 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/fort-philip-q5471821.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/australia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
