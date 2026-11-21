# Wégimont Castle

> Belgium · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wegimont-castle-q2065436` |
| Coordinates | 50.61245, 5.73789 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.61245/5.73789)) |
| Wikidata | [Q2065436](https://www.wikidata.org/wiki/Q2065436) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Soumagne |
| Inception | C15;C |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | inv |
| OSM `website` | https://www.provincedeliege.be/wegimont |

## What the model contains

Tier **T1**, status `location-only`, 97 elements (road 50, water 3, waterway 5, building 31, zone 8).

Evidence: documented 0, mapped 97, inferred 0, derived 0; heights documented 0, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21391066 historic=castle Q2065436 7 m from ledger point
- site is a site relation of 4 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (82 x 81 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.61245/5.73789) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=5; wikidata:Q2065436 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 99 elements); data/traces/wegimont-castle-q2065436.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
