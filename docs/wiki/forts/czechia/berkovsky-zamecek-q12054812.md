# Berkovský zámeček

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `berkovsky-zamecek-q12054812` |
| Coordinates | 50.7367, 14.5812 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.7367/14.5812)) |
| Wikidata | [Q12054812](https://www.wikidata.org/wiki/Q12054812) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|château\|fortified house |
| Administrative area | Sloup v Čechách |
| Inception | 1526 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `website` | http://hradsloup.cz/ |

## What the model contains

Tier **T1**, status `outline+walls`, 129 elements (outline 1, marker 3, road 40, water 6, building 52, waterway 15, zone 5, cliff 5, wall 2).

Evidence: documented 0, mapped 129, inferred 0, derived 0; heights documented 12, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26789982 historic=castle Q499095 97 m from ledger point
- origin moved 100 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.7367/14.5812) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|château\|fortified house; sitelinks=2; wikidata:Q12054812 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 129 elements); data/traces/berkovsky-zamecek-q12054812.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
