# Domein Ter Wallen

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `domein-ter-wallen-q101625377` |
| Coordinates | 50.91461, 3.21721 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.91461/3.21721)) |
| Wikidata | [Q101625377](https://www.wikidata.org/wiki/Q101625377) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Izegem |
| Inception | 1906 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 209 elements (outline 1, road 57, building 420, water 1, zone 23, wall 7).

Evidence: documented 0, mapped 209, inferred 0, derived 0; heights documented 64, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/96629216 historic=castle Q101625377 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 420 mapped (trace size budget); the rest of the town is not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.91461/3.21721) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=1; wikidata:Q101625377 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 209 elements); data/traces/domein-ter-wallen-q101625377.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
