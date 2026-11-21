# Corte citadel

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `corte-citadel-q4231998` |
| Coordinates | 42.3059, 9.14844 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.3059/9.14844)) |
| Wikidata | [Q4231998](https://www.wikidata.org/wiki/Q4231998) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Corte |
| Designations | classified historical monument |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 2, road 165, waterway 3, building 233, wall 14, retaining-wall 16, zone 1).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 1, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/222221155 historic=fort 35 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 233 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 165 mapped (trace size budget); minor lanes are not drawn
- origin moved 33 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.3059/9.14844) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=3; wikidata:Q4231998 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/corte-citadel-q4231998.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
