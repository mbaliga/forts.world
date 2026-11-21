# Nochiseyama Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nochiseyama-castle-q11488357` |
| Coordinates | 35.4882, 135.73906 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.4882/135.73906)) |
| Wikidata | [Q11488357](https://www.wikidata.org/wiki/Q11488357) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Obama |
| Inception | 1522 |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `location-only`, 221 elements (marker 6, road 67, waterway 14, building 592, zone 14).

Evidence: documented 0, mapped 221, inferred 0, derived 0; heights documented 3, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/22041145 historic=yes 15303 m from ledger point
- site is a route relation of 169 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (26826 x 10923 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 592 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.4882/135.73906) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=5; wikidata:Q11488357 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 1 elements); data/traces/nochiseyama-castle-q11488357.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
