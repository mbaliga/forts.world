# Hof van Savoye

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hof-van-savoye-q2803442` |
| Coordinates | 51.02857, 4.48627 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.02857/4.48627)) |
| Wikidata | [Q2803442](https://www.wikidata.org/wiki/Q2803442) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|historic building |
| Administrative area | Mechelen |
| Designations | beschermd monument |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | https://inventaris.onroerenderfgoed.be/aanduidingsobjecten/5361 |

## What the model contains

Tier **T1**, status `outline+walls`, 221 elements (outline 1, road 87, water 5, building 382, waterway 3, zone 3, wall 2).

Evidence: documented 0, mapped 221, inferred 0, derived 0; heights documented 1, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/322834585 historic=castle Q2803442 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 382 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.02857/4.48627) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|historic building; sitelinks=6; wikidata:Q2803442 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 221 elements); data/traces/hof-van-savoye-q2803442.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
