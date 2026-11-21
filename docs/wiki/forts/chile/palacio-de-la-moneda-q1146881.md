# Palacio de La Moneda

> Chile · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-de-la-moneda-q1146881` |
| Coordinates | -33.44282, -70.65386 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-33.44282/-70.65386)) |
| Wikidata | [Q1146881](https://www.wikidata.org/wiki/Q1146881) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building of public administration |
| Administrative area | Santiago |
| Inception | 1784 |
| Designations | Historical Monument of Chile\|Tentative World Heritage Site |
| Wikipedia language editions | 30 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://visitaspatrimonio.presidencia.cl/ |

## What the model contains

Tier **T1**, status `outline+walls`, 323 elements (outline 1, marker 18, road 149, building 119, water 5, zone 12, wall 17, retaining-wall 2).

Evidence: documented 0, mapped 323, inferred 0, derived 0; heights documented 11, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/394238 historic=castle Q1146881 11 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- 27 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-33.44282/-70.65386) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building of public administration; sitelinks=30; wikidata:Q1146881 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 323 elements); data/traces/palacio-de-la-moneda-q1146881.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/chile.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
