# Brömsehus

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bromsehus-q3431591` |
| Coordinates | 56.3221, 16.0474 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.3221/16.0474)) |
| Wikidata | [Q3431591](https://www.wikidata.org/wiki/Q3431591) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Karlskrona Municipality |
| Designations | monument in Fornminnesregistret |
| Wikipedia language editions | 6 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |

## What the model contains

Tier **T1**, status `outline-only`, 39 elements (outline 1, coastline 5, road 24, zone 3, water 4, waterway 2).

Evidence: documented 0, mapped 39, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/286938702 historic=archaeological_site Q3431591 19 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":25,"medianInside":2.4,"medianOutside":2.3}
- sea-1: DEM check failed {"cells":1,"medianInside":3.3,"medianOutside":2.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.3221/16.0474) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=6; wikidata:Q3431591 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 39 elements); data/traces/bromsehus-q3431591.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
