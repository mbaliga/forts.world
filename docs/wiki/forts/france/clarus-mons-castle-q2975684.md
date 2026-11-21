# Clarus Mons Castle

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `clarus-mons-castle-q2975684` |
| Coordinates | 45.7805, 3.08637 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.7805/3.08637)) |
| Wikidata | [Q2975684](https://www.wikidata.org/wiki/Q2975684) (CC0) |
| Wikidata class | castle |
| Types | castle\|destroyed building or structure |
| Administrative area | Clermont-Ferrand |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 287 elements (outline 1, marker 4, road 201, building 535, retaining-wall 2, zone 3, wall 7).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 83, inferred 0, unknown 46.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/331379490 historic=yes Q15948811 279 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 535 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 201 mapped (trace size budget); minor lanes are not drawn
- origin moved 279 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.7805/3.08637) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|destroyed building or structure; sitelinks=1; wikidata:Q2975684 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 287 elements); data/traces/clarus-mons-castle-q2975684.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
