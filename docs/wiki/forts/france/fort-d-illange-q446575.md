# Fort d'Illange

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-d-illange-q446575` |
| Coordinates | 49.33388, 6.17676 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.33388/6.17676)) |
| Wikidata | [Q446575](https://www.wikidata.org/wiki/Q446575) (CC0) |
| Wikidata class | fort |
| Types | fort\|military museum\|built structure |
| Administrative area | Illange |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 249 elements (outline 1, road 117, zone 8, waterway 1, building 272, water 2).

Evidence: documented 0, mapped 249, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/178691010 historic=fort Q446575 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 272 mapped (trace size budget); the rest of the town is not drawn
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.33388/6.17676) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|military museum\|built structure; sitelinks=6; wikidata:Q446575 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 249 elements); data/traces/fort-d-illange-q446575.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
