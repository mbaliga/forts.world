# Huis de Torentjes

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `huis-de-torentjes-q2551149` |
| Coordinates | 50.83166, 5.69396 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.83166/5.69396)) |
| Wikidata | [Q2551149](https://www.wikidata.org/wiki/Q2551149) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|house\|château |
| Administrative area | Maastricht |
| Inception | 1875 |
| Designations | Rijksmonument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 104 elements (outline 1, road 28, zone 14, waterway 2, building 57, wall 1, water 1).

Evidence: documented 0, mapped 104, inferred 0, derived 0; heights documented 2, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/275332705 historic=castle Q2551149 5 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.83166/5.69396) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|house\|château; sitelinks=3; wikidata:Q2551149 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 104 elements); data/traces/huis-de-torentjes-q2551149.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
