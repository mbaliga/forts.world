# Portopí Lighthouse

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `portopi-lighthouse-q5856454` |
| Coordinates | 39.54856, 2.62338 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.54856/2.62338)) |
| Wikidata | [Q5856454](https://www.wikidata.org/wiki/Q5856454) (CC0) |
| Wikidata class | fortification |
| Types | lighthouse\|watchtower |
| Administrative area | Palma |
| Inception | 1300 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |
| OSM `website` | http://www.museomilitarsancarlos.com |

## What the model contains

Tier **T1**, status `outline+walls`, 91 elements (outline 1, marker 16, road 37, building 20, wall 7, coastline 1, retaining-wall 4, zone 3, water 2).

Evidence: documented 0, mapped 91, inferred 0, derived 2; heights documented 0, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2885399 historic=castle 251 m from ledger point
- origin moved 255 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":330,"medianInside":0,"medianOutside":8.5}
- sea-1: DEM check ok {"cells":105,"medianInside":0,"medianOutside":7.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.54856/2.62338) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; lighthouse\|watchtower; sitelinks=8; wikidata:Q5856454 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 91 elements); data/traces/portopi-lighthouse-q5856454.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
