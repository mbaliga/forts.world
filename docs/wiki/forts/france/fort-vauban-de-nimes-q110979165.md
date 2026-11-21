# Fort Vauban de Nîmes

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-vauban-de-nimes-q110979165` |
| Coordinates | 43.8424, 4.35616 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.8424/4.35616)) |
| Wikidata | [Q110979165](https://www.wikidata.org/wiki/Q110979165) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Nîmes |
| Inception | 1686 |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 283 elements (outline 1, road 183, wall 5, building 834, waterway 1, zone 6).

Evidence: documented 0, mapped 283, inferred 0, derived 0; heights documented 3, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18178612 historic=fort Q110979165 66 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 834 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 183 mapped (trace size budget); minor lanes are not drawn
- origin moved 73 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.8424/4.35616) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q110979165 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 283 elements); data/traces/fort-vauban-de-nimes-q110979165.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
