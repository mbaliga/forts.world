# Schloss Gadebusch

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-gadebusch-q2799825` |
| Coordinates | 53.70019, 11.11963 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.70019/11.11963)) |
| Wikidata | [Q2799825](https://www.wikidata.org/wiki/Q2799825) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Gadebusch |
| Designations | architectural heritage monument in Mecklenburg-Vorpommern |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `website` | http://www.schloss-gadebusch.de |

## What the model contains

Tier **T1**, status `location-only`, 277 elements (marker 4, water 1, road 72, waterway 2, zone 4, building 192, wall 2).

Evidence: documented 0, mapped 277, inferred 0, derived 0; heights documented 2, inferred 0, unknown 192.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4085022 historic=castle Q2799825 7 m from ledger point
- site is a site relation of 20 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (109 x 130 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.70019/11.11963) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=3; wikidata:Q2799825 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 277 elements); data/traces/schloss-gadebusch-q2799825.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
