# Duurstede Castle

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `duurstede-castle-q2478123` |
| Coordinates | 51.96951, 5.34353 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.96951/5.34353)) |
| Wikidata | [Q2478123](https://www.wikidata.org/wiki/Q2478123) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|château |
| Administrative area | Wijk bij Duurstede |
| Inception | C13 |
| Designations | Rijksmonument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 259 elements (outline 1, marker 1, road 143, building 201, zone 124, water 7, waterway 1, wall 15).

Evidence: documented 0, mapped 259, inferred 0, derived 0; heights documented 3, inferred 0, unknown 67.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1101743561 historic=castle Q2478123 5 m from ledger point
- pruned to the outline plus 150 m: 493 -> 330 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 96 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 115 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.96951/5.34353) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|château; sitelinks=7; wikidata:Q2478123 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 259 elements); data/traces/duurstede-castle-q2478123.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
