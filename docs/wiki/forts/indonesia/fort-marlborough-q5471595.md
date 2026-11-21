# Fort Marlborough

> Indonesia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-marlborough-q5471595` |
| Coordinates | -3.78748, 102.25099 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-3.78748/102.25099)) |
| Wikidata | [Q5471595](https://www.wikidata.org/wiki/Q5471595) (CC0) |
| Wikidata class | fort |
| Types | fortification\|museum |
| Administrative area | Bengkulu |
| Wikipedia language editions | 7 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 218 elements (outline 1, marker 3, road 88, building 541, water 1, coastline 1, zone 3, waterway 1).

Evidence: documented 0, mapped 218, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/704450077 historic=yes 91 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 541 mapped (trace size budget); the rest of the town is not drawn
- origin moved 90 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-3.78748/102.25099) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|museum; sitelinks=7; wikidata:Q5471595 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 218 elements); data/traces/fort-marlborough-q5471595.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
