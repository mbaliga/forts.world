# Schloss Urbach

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-urbach-q16006239` |
| Coordinates | 48.81839, 9.57388 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.81839/9.57388)) |
| Wikidata | [Q16006239](https://www.wikidata.org/wiki/Q16006239) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Urbach |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 269 elements (outline 1, road 125, building 275, zone 6, waterway 7, wall 5, water 1, retaining-wall 4).

Evidence: documented 0, mapped 269, inferred 0, derived 0; heights documented 0, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/35840776 historic=castle Q16006239 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 275 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.81839/9.57388) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q16006239 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 269 elements); data/traces/schloss-urbach-q16006239.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
