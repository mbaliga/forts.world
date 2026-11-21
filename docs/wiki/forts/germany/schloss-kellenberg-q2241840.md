# Schloss Kellenberg

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-kellenberg-q2241840` |
| Coordinates | 50.9482, 6.30199 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.9482/6.30199)) |
| Wikidata | [Q2241840](https://www.wikidata.org/wiki/Q2241840) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Jülich |
| Inception | C15.. |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `location-only`, 152 elements (marker 2, road 23, waterway 9, water 1, building 107, zone 10).

Evidence: documented 0, mapped 152, inferred 0, derived 0; heights documented 0, inferred 0, unknown 107.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8727042 historic=castle Q2241840 26 m from ledger point
- site is a site relation of 5 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (116 x 103 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.9482/6.30199) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=2; wikidata:Q2241840 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 152 elements); data/traces/schloss-kellenberg-q2241840.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
