# Lynch's Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lynch-s-castle-q25616081` |
| Coordinates | 53.27324, -9.05241 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.27324/-9.05241)) |
| Wikidata | [Q25616081](https://www.wikidata.org/wiki/Q25616081) (CC0) |
| Wikidata class | castle |
| Types | castle\|bank building |
| Administrative area | Galway |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 7, road 228, waterway 7, water 1, building 398, wall 14, coastline 1, zone 1).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 21, inferred 0, unknown 113.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1361673399 historic=castle Q25616081 16 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 398 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 228 mapped (trace size budget); minor lanes are not drawn
- origin moved 16 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.27324/-9.05241) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|bank building; sitelinks=3; wikidata:Q25616081 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/lynch-s-castle-q25616081.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
