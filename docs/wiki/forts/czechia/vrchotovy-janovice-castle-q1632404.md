# Vrchotovy Janovice Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vrchotovy-janovice-castle-q1632404` |
| Coordinates | 49.66926, 14.57795 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.66926/14.57795)) |
| Wikidata | [Q1632404](https://www.wikidata.org/wiki/Q1632404) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortified house\|museum building |
| Inception | 1400 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.nm.cz/Hlavni-strana/Navstivte-nas/Zamek-Vrchotovy-Janovice.html |

## What the model contains

Tier **T1**, status `outline+walls`, 97 elements (outline 1, marker 2, road 35, waterway 9, building 45, zone 2, wall 2, water 1).

Evidence: documented 0, mapped 97, inferred 0, derived 0; heights documented 3, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2192634 historic=castle Q1632404 10 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.66926/14.57795) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortified house\|museum building; sitelinks=5; wikidata:Q1632404 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 97 elements); data/traces/vrchotovy-janovice-castle-q1632404.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
