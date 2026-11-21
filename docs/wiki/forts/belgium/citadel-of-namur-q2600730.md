# Citadel of Namur

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadel-of-namur-q2600730` |
| Coordinates | 50.46056, 4.86528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.46056/4.86528)) |
| Wikidata | [Q2600730](https://www.wikidata.org/wiki/Q2600730) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Namur |
| Designations | Exceptional heritage property of Wallonia\|protected heritage property in Wallonia |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 4 |
| OSM `website` | https://citadelle.namur.be/ |

## What the model contains

Tier **T1**, status `outline+walls`, 330 elements (outline 1, marker 29, road 626, building 1578, zone 38, wall 134, cliff 1, retaining-wall 55, water 5, waterway 11).

Evidence: documented 0, mapped 330, inferred 0, derived 0; heights documented 1, inferred 0, unknown 199.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/121629346 historic=castle Q2600730 147 m from ledger point
- pruned to the outline plus 150 m: 2478 -> 1049 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 473 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 386 mapped (trace size budget); minor lanes are not drawn
- origin moved 138 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.46056/4.86528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=13; wikidata:Q2600730 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 394 elements); data/traces/citadel-of-namur-q2600730.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
