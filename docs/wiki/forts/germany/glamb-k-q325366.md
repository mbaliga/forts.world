# Glambæk

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `glamb-k-q325366` |
| Coordinates | 54.41216, 11.2084 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.41216/11.2084)) |
| Wikidata | [Q325366](https://www.wikidata.org/wiki/Q325366) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|yes\|ruins |
| Administrative area | Fehmarn |
| Inception | 1210 |
| Designations | Heritage monument in Schleswig-Holstein\|Kulturdenkmal |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 83 elements (outline 1, road 63, building 12, coastline 2, zone 2, wall 1, water 2).

Evidence: documented 0, mapped 83, inferred 0, derived 2; heights documented 6, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/288180813 historic=castle Q325366 2 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":64,"medianInside":-1,"medianOutside":1.4}
- sea-1: DEM check failed {"cells":24,"medianInside":2.3,"medianOutside":1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.41216/11.2084) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|yes\|ruins; sitelinks=7; wikidata:Q325366 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 83 elements); data/traces/glamb-k-q325366.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
