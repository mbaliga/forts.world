# Civico museo del Castello di San Giusto

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `civico-museo-del-castello-di-san-giusto-q1048860` |
| Coordinates | 45.6469, 13.7735 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.6469/13.7735)) |
| Wikidata | [Q1048860](https://www.wikidata.org/wiki/Q1048860) (CC0) |
| Wikidata class | castle |
| Types | castle\|art museum\|history museum\|military museum building\|museum of a public entity |
| Administrative area | Trieste |
| Designations | Italian national heritage |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 346 elements (outline 1, marker 41, road 324, building 90, zone 26, waterway 1, retaining-wall 16, wall 20, coastline 1).

Evidence: documented 0, mapped 346, inferred 0, derived 0; heights documented 82, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7287683 historic=castle Q1048860 26 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- roads capped: kept the 150 longest of 324 mapped (trace size budget); minor lanes are not drawn
- origin moved 36 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.6469/13.7735) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|art museum\|history museum\|military museum building\|museum of a public entity; sitelinks=9; wikidata:Q1048860 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 346 elements); data/traces/civico-museo-del-castello-di-san-giusto-q1048860.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
