# Sarmizegetusa Regia

> Romania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sarmizegetusa-regia-q739802` |
| Coordinates | 45.62278, 23.31028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.62278/23.31028)) |
| Wikidata | [Q739802](https://www.wikidata.org/wiki/Q739802) (CC0) |
| Wikidata class | fort |
| Types | archaeological site\|dava\|ancient city\|temple\|fortress |
| Administrative area | Orăștioara de Sus |
| Designations | part of UNESCO World Heritage Site\|Historic Monument |
| UNESCO WHC id | 906-001 |
| Wikipedia language editions | 32 |
| OSM `historic` | archaeological_site |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 47 elements (outline 1, marker 1, waterway 3, zone 5, road 15, building 20, wall 2).

Evidence: documented 0, mapped 47, inferred 0, derived 0; heights documented 0, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/258689243 historic=archaeological_site Q739802 276 m from ledger point
- origin moved 322 m from the ledger point to the outline centroid
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.62278/23.31028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; archaeological site\|dava\|ancient city\|temple\|fortress; sitelinks=32; wikidata:Q739802 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 47 elements); data/traces/sarmizegetusa-regia-q739802.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/romania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
