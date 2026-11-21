# Fatih Muftiate

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fatih-muftiate-q133504444` |
| Coordinates | 41.02003, 28.94866 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.02003/28.94866)) |
| Wikidata | [Q133504444](https://www.wikidata.org/wiki/Q133504444) (CC0) |
| Wikidata class | fortification |
| Types | public building\|outpost\|historic building\|religious building |
| Administrative area | Fatih |
| Wikipedia language editions | 1 |
| OSM `historic` | tomb |

## What the model contains

Tier **T1**, status `outline+walls`, 227 elements (outline 1, marker 4, zone 3, road 98, building 314, wall 1).

Evidence: documented 0, mapped 227, inferred 0, derived 0; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/331191334 historic=tomb Q34503 159 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 314 mapped (trace size budget); the rest of the town is not drawn
- origin moved 159 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.02003/28.94866) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; public building\|outpost\|historic building\|religious building; sitelinks=1; wikidata:Q133504444 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 227 elements); data/traces/fatih-muftiate-q133504444.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
