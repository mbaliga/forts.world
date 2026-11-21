# Ostseeheilbad Burgtiefe

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ostseeheilbad-burgtiefe-q58404854` |
| Coordinates | 54.41067, 11.20079 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.41067/11.20079)) |
| Wikidata | [Q58404854](https://www.wikidata.org/wiki/Q58404854) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Fehmarn |
| Designations | Heritage monument in Schleswig-Holstein |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 80 elements (outline 1, road 60, building 11, coastline 2, waterway 1, zone 2, wall 1, water 2).

Evidence: documented 0, mapped 80, inferred 0, derived 2; heights documented 5, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/288180813 historic=castle Q325366 521 m from ledger point
- origin moved 524 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":64,"medianInside":-1,"medianOutside":1.4}
- sea-1: DEM check failed {"cells":24,"medianInside":2.3,"medianOutside":1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.41067/11.20079) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q58404854 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 80 elements); data/traces/ostseeheilbad-burgtiefe-q58404854.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
