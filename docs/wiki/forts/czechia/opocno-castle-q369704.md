# Opočno Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `opocno-castle-q369704` |
| Coordinates | 50.26486, 16.11558 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.26486/16.11558)) |
| Wikidata | [Q369704](https://www.wikidata.org/wiki/Q369704) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Designations | national cultural monument of the Czech Republic |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.zamek-opocno.cz/ |

## What the model contains

Tier **T1**, status `outline+walls`, 200 elements (outline 1, marker 7, road 76, water 4, building 83, wall 18, zone 2, retaining-wall 1, cliff 1, waterway 7).

Evidence: documented 0, mapped 200, inferred 0, derived 0; heights documented 47, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/60761321 historic=castle Q369704 4 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.26486/16.11558) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=6; wikidata:Q369704 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 200 elements); data/traces/opocno-castle-q369704.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
