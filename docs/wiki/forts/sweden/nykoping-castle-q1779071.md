# Nyköping Castle

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nykoping-castle-q1779071` |
| Coordinates | 58.74847, 17.01167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.74847/17.01167)) |
| Wikidata | [Q1779071](https://www.wikidata.org/wiki/Q1779071) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum\|architectural ensemble\|cultural property\|heritage site in Sweden |
| Administrative area | Nyköping Municipality |
| Inception | 1200 |
| Designations | governmental listed building complex |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress,_museum |

## What the model contains

Tier **T1**, status `outline-only`, 213 elements (outline 1, marker 3, road 129, waterway 2, water 3, zone 3, building 71, coastline 1).

Evidence: documented 0, mapped 213, inferred 0, derived 0; heights documented 9, inferred 0, unknown 62.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2365293 historic=castle Q1779071 16 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 23 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.74847/17.01167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum\|architectural ensemble\|cultural property\|heritage site in Sweden; sitelinks=20; wikidata:Q1779071 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 213 elements); data/traces/nykoping-castle-q1779071.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
