# Liptovský Hrádok Castle

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `liptovsky-hradok-castle-q12767100` |
| Coordinates | 49.04583, 19.73306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.04583/19.73306)) |
| Wikidata | [Q12767100](https://www.wikidata.org/wiki/Q12767100) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Liptovský Hrádok |
| Inception | 1314 |
| Wikipedia language editions | 5 |
| OSM `historic` | manor |
| OSM `website` | https://hradliptovskyhradok.sk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 131 elements (outline 1, marker 3, road 78, zone 1, wall 1, building 41, cliff 2, waterway 1, water 3).

Evidence: documented 0, mapped 131, inferred 0, derived 0; heights documented 0, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14567328 historic=manor Q12767100 11 m from ledger point
- origin moved 13 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.04583/19.73306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=5; wikidata:Q12767100 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 124 elements); data/traces/liptovsky-hradok-castle-q12767100.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 131 elements; outline osm:relation/14567328 historic=manor Q12767100 11 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
