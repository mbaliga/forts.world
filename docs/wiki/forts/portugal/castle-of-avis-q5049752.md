# Castle of Avis

> Portugal · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-avis-q5049752` |
| Coordinates | 39.05694, -7.89111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.05694/-7.89111)) |
| Wikidata | [Q5049752](https://www.wikidata.org/wiki/Q5049752) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Avis |
| Inception | 1211 |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 7 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 264 elements (marker 2, road 120, waterway 1, wall 17, retaining-wall 2, building 540, zone 2).

Evidence: documented 0, mapped 264, inferred 0, derived 0; heights documented 0, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15538203 historic=citywalls Q5049752 61 m from ledger point
- site is a site relation of 14 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (291 x 187 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 540 mapped (trace size budget); the rest of the town is not drawn
- origin moved 42 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.05694/-7.89111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=7; wikidata:Q5049752 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 209 elements); data/traces/castle-of-avis-q5049752.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
