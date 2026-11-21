# Prieuré hospitalier de Bourganeuf

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `prieure-hospitalier-de-bourganeuf-q23055691` |
| Coordinates | 45.95383, 1.75639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.95383/1.75639)) |
| Wikidata | [Q23055691](https://www.wikidata.org/wiki/Q23055691) (CC0) |
| Wikidata class | castle |
| Types | castle\|prieuré\|hospital priory |
| Administrative area | Bourganeuf |
| Inception | C14 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 202 elements (outline 1, marker 2, road 67, zone 7, building 344, wall 2, waterway 1, retaining-wall 2).

Evidence: documented 0, mapped 202, inferred 0, derived 0; heights documented 3, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/230312351 historic=castle Q3533218 27 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 344 mapped (trace size budget); the rest of the town is not drawn
- origin moved 26 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.95383/1.75639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|prieuré\|hospital priory; sitelinks=2; wikidata:Q23055691 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 202 elements); data/traces/prieure-hospitalier-de-bourganeuf-q23055691.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
