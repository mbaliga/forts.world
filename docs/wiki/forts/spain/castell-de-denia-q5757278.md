# Castell de Dénia

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-de-denia-q5757278` |
| Coordinates | 38.84306, 0.1075 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.84306/0.1075)) |
| Wikidata | [Q5757278](https://www.wikidata.org/wiki/Q5757278) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Dénia |
| Inception | 1100 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.denia.net/castell-de-denia-y-museu-arqueologic |

## What the model contains

Tier **T1**, status `outline+walls`, 270 elements (outline 1, marker 1, road 116, building 347, wall 28, coastline 1, zone 1, retaining-wall 1, cliff 1).

Evidence: documented 0, mapped 270, inferred 0, derived 0; heights documented 0, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/686347962 historic=castle Q5757278 12 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 347 mapped (trace size budget); the rest of the town is not drawn
- origin moved 12 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.84306/0.1075) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=8; wikidata:Q5757278 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 270 elements); data/traces/castell-de-denia-q5757278.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
