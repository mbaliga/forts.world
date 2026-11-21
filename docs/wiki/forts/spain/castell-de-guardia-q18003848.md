# Castell de Guàrdia

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-de-guardia-q18003848` |
| Coordinates | 41.60897, 1.77369 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.60897/1.77369)) |
| Wikidata | [Q18003848](https://www.wikidata.org/wiki/Q18003848) (CC0) |
| Wikidata class | castle |
| Types | castle\|yes\|deserted castle site\|Catalan historical locality |
| Administrative area | El Bruc |
| Designations | bien de interés cultural\|Cultural Asset of National Interest |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `website` | https://camiramaderdemarina.cat/ |

## What the model contains

Tier **T1**, status `location-only`, 49 elements (marker 2, road 25, waterway 15, building 1, zone 6).

Evidence: documented 0, mapped 49, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15557473 historic=yes Q51881900 28102 m from ledger point
- site is a route relation of 1423 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (45766 x 139262 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.60897/1.77369) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|yes\|deserted castle site\|Catalan historical locality; sitelinks=2; wikidata:Q18003848 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 49 elements); data/traces/castell-de-guardia-q18003848.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
