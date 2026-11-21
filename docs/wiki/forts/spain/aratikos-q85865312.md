# Aratikos

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `aratikos-q85865312` |
| Coordinates | 41.58314, -1.78497 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.58314/-1.78497)) |
| Wikidata | [Q85865312](https://www.wikidata.org/wiki/Q85865312) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|celtiberian town |
| Administrative area | Aranda de Moncayo |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 28 elements (outline 1, road 18, wall 3, building 3, cliff 1, waterway 2).

Evidence: documented 0, mapped 28, inferred 0, derived 0; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1489888063 historic=castle 712 m from ledger point
- origin moved 711 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.58314/-1.78497) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|celtiberian town; sitelinks=4; wikidata:Q85865312 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 28 elements); data/traces/aratikos-q85865312.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
