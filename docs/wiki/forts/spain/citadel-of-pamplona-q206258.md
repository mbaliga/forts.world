# Citadel of Pamplona

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadel-of-pamplona-q206258` |
| Coordinates | 42.81194, -1.64917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.81194/-1.64917)) |
| Wikidata | [Q206258](https://www.wikidata.org/wiki/Q206258) (CC0) |
| Wikidata class | fort |
| Types | star fort\|urban park\|citadel\|art exhibition\|monument |
| Administrative area | Pamplona |
| Inception | 1571 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, marker 2, road 513, zone 41, building 54, water 5, wall 65, retaining-wall 1, waterway 12).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 23, inferred 0, unknown 97.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/42946489 historic=castle Q206258 41 m from ledger point
- roads capped: kept the 150 longest of 513 mapped (trace size budget); minor lanes are not drawn
- origin moved 41 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.81194/-1.64917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; star fort\|urban park\|citadel\|art exhibition\|monument; sitelinks=8; wikidata:Q206258 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/citadel-of-pamplona-q206258.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
