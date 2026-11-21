# Palácio José Maria Eugénio

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-jose-maria-eugenio-q73761906` |
| Coordinates | 38.734, -9.15233 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.734/-9.15233)) |
| Wikidata | [Q73761906](https://www.wikidata.org/wiki/Q73761906) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Avenidas Novas |
| Designations | Included in protected site |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 312 elements (outline 1, marker 1, road 259, building 179, retaining-wall 6, wall 29, zone 3, water 2).

Evidence: documented 0, mapped 312, inferred 0, derived 0; heights documented 26, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/290225001 historic=castle Q73761906 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 179 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 259 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.734/-9.15233) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=3; wikidata:Q73761906 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 312 elements); data/traces/palacio-jose-maria-eugenio-q73761906.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
