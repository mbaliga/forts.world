# Luxembourg Palace

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `luxembourg-palace-q329852` |
| Coordinates | 48.84855, 2.33714 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.84855/2.33714)) |
| Wikidata | [Q329852](https://www.wikidata.org/wiki/Q329852) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace |
| Administrative area | Quartier de l'Odéon |
| Inception | 1620 |
| Designations | classified historical monument |
| Wikipedia language editions | 53 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 362 elements (outline 1, marker 10, road 283, wall 12, building 222, zone 63, water 4, retaining-wall 2).

Evidence: documented 0, mapped 362, inferred 0, derived 0; heights documented 79, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/975955 historic=castle Q329852 42 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 222 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 283 mapped (trace size budget); minor lanes are not drawn
- origin moved 49 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.84855/2.33714) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace; sitelinks=53; wikidata:Q329852 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 362 elements); data/traces/luxembourg-palace-q329852.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
