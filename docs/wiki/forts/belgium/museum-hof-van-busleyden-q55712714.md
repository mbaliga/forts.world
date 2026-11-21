# Museum Hof van Busleyden

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `museum-hof-van-busleyden-q55712714` |
| Coordinates | 51.03112, 4.48242 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.03112/4.48242)) |
| Wikidata | [Q55712714](https://www.wikidata.org/wiki/Q55712714) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|museum |
| Administrative area | Mechelen |
| Inception | 1503. |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |
| OSM `website` | https://www.hofvanbusleyden.be/ |

## What the model contains

Tier **T1**, status `outline+walls`, 214 elements (outline 1, marker 1, road 69, water 4, waterway 1, building 440, zone 7, wall 11).

Evidence: documented 0, mapped 214, inferred 0, derived 0; heights documented 5, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/323237340 historic=castle Q55712714 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 440 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.03112/4.48242) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|museum; sitelinks=3; wikidata:Q55712714 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 214 elements); data/traces/museum-hof-van-busleyden-q55712714.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
