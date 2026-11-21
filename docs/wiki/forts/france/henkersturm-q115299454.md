# Henkersturm

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `henkersturm-q115299454` |
| Coordinates | 48.58144, 7.73874 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.58144/7.73874)) |
| Wikidata | [Q115299454](https://www.wikidata.org/wiki/Q115299454) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Strasbourg |
| Inception | 1250 |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 318 elements (outline 1, marker 1, road 182, waterway 19, building 245, wall 17, zone 7, water 1, retaining-wall 2).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 25, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/40034170 historic=yes Q115299454 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 245 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 182 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.58144/7.73874) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q115299454 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 318 elements); data/traces/henkersturm-q115299454.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
