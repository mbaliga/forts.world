# Nenagh Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nenagh-castle-q32997007` |
| Coordinates | 52.86501, -8.19819 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.86501/-8.19819)) |
| Wikidata | [Q32997007](https://www.wikidata.org/wiki/Q32997007) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Nenagh |
| Designations | national monument of Ireland |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 253 elements (outline 1, marker 2, road 73, building 336, wall 41, zone 16).

Evidence: documented 0, mapped 253, inferred 0, derived 0; heights documented 6, inferred 0, unknown 155.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/229024294 historic=castle Q32997007 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 336 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.86501/-8.19819) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q32997007 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 253 elements); data/traces/nenagh-castle-q32997007.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
