# Oschatzer Tor Belgern

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oschatzer-tor-belgern-q49468630` |
| Coordinates | 51.48137, 13.12394 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.48137/13.12394)) |
| Wikidata | [Q49468630](https://www.wikidata.org/wiki/Q49468630) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Belgern-Schildau |
| Inception | 1805 |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `heritage` | 4 |
| OSM `description` | Ehemaliger Gasthof "Goldener Engel" in Belgern, Markt 7 |

## What the model contains

Tier **T1**, status `outline+walls`, 185 elements (outline 1, marker 5, waterway 1, road 53, building 351, zone 1, wall 3, water 1).

Evidence: documented 0, mapped 185, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/172879478 historic=building Q49468548 123 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 351 mapped (trace size budget); the rest of the town is not drawn
- origin moved 123 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.48137/13.12394) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q49468630 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 185 elements); data/traces/oschatzer-tor-belgern-q49468630.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
