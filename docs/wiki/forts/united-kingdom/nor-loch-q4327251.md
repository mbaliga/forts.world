# Nor Loch

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nor-loch-q4327251` |
| Coordinates | 55.95, -3.2 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.95/-3.2)) |
| Wikidata | [Q4327251](https://www.wikidata.org/wiki/Q4327251) (CC0) |
| Wikidata class | fortification |
| Types | moat\|former lake |
| Administrative area | City of Edinburgh |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.edinburghcastle.scot/ |

## What the model contains

Tier **T1**, status `outline+walls`, 351 elements (outline 1, marker 53, road 340, building 251, cliff 55, wall 114, zone 29, retaining-wall 15).

Evidence: documented 0, mapped 351, inferred 0, derived 0; heights documented 37, inferred 0, unknown 109.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/4301292 historic=castle Q212065 151 m from ledger point
- pruned to the outline plus 150 m: 858 -> 551 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 107 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 233 mapped (trace size budget); minor lanes are not drawn
- origin moved 151 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.95/-3.2) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; moat\|former lake; sitelinks=7; wikidata:Q4327251 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 351 elements); data/traces/nor-loch-q4327251.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
