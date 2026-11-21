# Berliner Tor und Pulverturm in Mittenwalde

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `berliner-tor-und-pulverturm-in-mittenwalde-q110290248` |
| Coordinates | 52.26635, 13.53543 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.26635/13.53543)) |
| Wikidata | [Q110290248](https://www.wikidata.org/wiki/Q110290248) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Mittenwalde |
| Designations | architectural heritage monument in Brandenburg |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | yes |
| OSM `description` | Pulverturm, Yorckstraße / Berliner Vorstadt in Mittenwalde |

## What the model contains

Tier **T1**, status `outline+walls`, 178 elements (outline 1, road 50, water 2, building 460, zone 3, waterway 1, wall 1).

Evidence: documented 0, mapped 178, inferred 0, derived 0; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/223248367 historic=yes 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 460 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.26635/13.53543) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q110290248 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 178 elements); data/traces/berliner-tor-und-pulverturm-in-mittenwalde-q110290248.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
