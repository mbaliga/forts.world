# Castelo de Évora

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castelo-de-evora-q2968395` |
| Coordinates | 38.5733, -7.9075 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.5733/-7.9075)) |
| Wikidata | [Q2968395](https://www.wikidata.org/wiki/Q2968395) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | União das Freguesias de Évora (São Mamede, Sé, São Pedro e Santo Antão) |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.palaciocadaval.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 372 elements (outline 1, marker 6, road 117, building 634, wall 118, retaining-wall 2, zone 8).

Evidence: documented 0, mapped 372, inferred 0, derived 0; heights documented 2, inferred 0, unknown 238.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/162550796 historic=castle Q7126267 14 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 634 mapped (trace size budget); the rest of the town is not drawn
- origin moved 13 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.5733/-7.9075) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=2; wikidata:Q2968395 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 372 elements); data/traces/castelo-de-evora-q2968395.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
