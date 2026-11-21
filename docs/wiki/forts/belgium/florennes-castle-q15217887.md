# Florennes Castle

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `florennes-castle-q15217887` |
| Coordinates | 50.25121, 4.60117 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.25121/4.60117)) |
| Wikidata | [Q15217887](https://www.wikidata.org/wiki/Q15217887) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Florennes |
| Designations | protected heritage property in Wallonia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 4 |
| OSM `description` | ensemble castral d'origine médiévale |

## What the model contains

Tier **T1**, status `outline+walls`, 181 elements (outline 1, road 53, building 422, wall 5, retaining-wall 1, zone 1).

Evidence: documented 0, mapped 181, inferred 0, derived 0; heights documented 1, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20197293 historic=castle Q15217887 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 422 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.25121/4.60117) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q15217887 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 181 elements); data/traces/florennes-castle-q15217887.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
