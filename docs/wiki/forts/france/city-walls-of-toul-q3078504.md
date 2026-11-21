# City walls of Toul

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-toul-q3078504` |
| Coordinates | 48.6733, 5.8951 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.6733/5.8951)) |
| Wikidata | [Q3078504](https://www.wikidata.org/wiki/Q3078504) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Toul |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 287 elements (outline 1, marker 3, road 117, building 684, wall 36, zone 7, waterway 3).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 0, inferred 0, unknown 156.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/69517193 historic=yes 371 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 684 mapped (trace size budget); the rest of the town is not drawn
- origin moved 371 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.6733/5.8951) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=2; wikidata:Q3078504 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 287 elements); data/traces/city-walls-of-toul-q3078504.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
