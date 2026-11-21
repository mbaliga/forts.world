# Tour Jeanne d'Arc

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-jeanne-d-arc-q22966187` |
| Coordinates | 49.4184, 2.822 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.4184/2.822)) |
| Wikidata | [Q22966187](https://www.wikidata.org/wiki/Q22966187) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Compiègne |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `heritage` | 3 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, marker 4, road 183, water 1, waterway 3, building 358, zone 2, retaining-wall 9, wall 8).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 31, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/105680999 historic=ruins Q22966187 27 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 358 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 183 mapped (trace size budget); minor lanes are not drawn
- origin moved 27 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.4184/2.822) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q22966187 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/tour-jeanne-d-arc-q22966187.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
