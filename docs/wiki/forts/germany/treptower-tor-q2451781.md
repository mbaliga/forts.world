# Treptower Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `treptower-tor-q2451781` |
| Coordinates | 53.557, 13.255 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.557/13.255)) |
| Wikidata | [Q2451781](https://www.wikidata.org/wiki/Q2451781) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Neubrandenburg |
| Designations | architectural heritage monument in Mecklenburg-Vorpommern |
| Wikipedia language editions | 3 |
| OSM `historic` | building |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 280 elements (outline 1, marker 4, road 324, building 90, wall 11, zone 18, retaining-wall 6).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 14, inferred 0, unknown 93.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/110536632 historic=building Q1395598 455 m from ledger point
- roads capped: kept the 150 longest of 324 mapped (trace size budget); minor lanes are not drawn
- origin moved 455 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.557/13.255) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q2451781 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 280 elements); data/traces/treptower-tor-q2451781.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
