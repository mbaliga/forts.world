# Ravensburger Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ravensburger-tor-q2133657` |
| Coordinates | 47.68775, 9.83361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.68775/9.83361)) |
| Wikidata | [Q2133657](https://www.wikidata.org/wiki/Q2133657) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Wangen im Allgäu |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 3 |
| OSM `historic` | city_gate |
| OSM `barrier` | entrance |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, marker 3, road 282, water 2, waterway 8, building 261, wall 11, zone 2, retaining-wall 1).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 5, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1295233603 historic=city_gate Q2133657 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 261 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 282 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.68775/9.83361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=3; wikidata:Q2133657 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 297 elements); data/traces/ravensburger-tor-q2133657.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 298 elements; outline osm:way/1295233603 historic=city_gate Q2133657 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
