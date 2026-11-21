# Oberes Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oberes-tor-q104427285` |
| Coordinates | 48.90542, 9.07798 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.90542/9.07798)) |
| Wikidata | [Q104427285](https://www.wikidata.org/wiki/Q104427285) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Markgröningen |
| Inception | 1555 |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |
| OSM `description` | Unter Denkmalschutz stehendes Wohngebäude. |

## What the model contains

Tier **T1**, status `outline+walls`, 271 elements (outline 1, marker 2, road 137, building 411, zone 5, water 1, wall 5).

Evidence: documented 0, mapped 271, inferred 0, derived 0; heights documented 6, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/242335741 historic=yes 74 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 411 mapped (trace size budget); the rest of the town is not drawn
- origin moved 75 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.90542/9.07798) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=1; wikidata:Q104427285 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 271 elements); data/traces/oberes-tor-q104427285.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
