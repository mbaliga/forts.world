# Castillo

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-q97640670` |
| Coordinates | 37.5241, -6.15872 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.5241/-6.15872)) |
| Wikidata | [Q97640670](https://www.wikidata.org/wiki/Q97640670) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Gerena |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 72 elements (outline 1, marker 1, road 59, waterway 1, building 5, wall 1, zone 4).

Evidence: documented 0, mapped 72, inferred 0, derived 0; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/729314802 historic=monument 50 m from ledger point
- origin moved 51 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.5241/-6.15872) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q97640670 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 72 elements); data/traces/castillo-q97640670.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
