# Steytelinck

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `steytelinck-q2399689` |
| Coordinates | 51.17053, 4.40356 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.17053/4.40356)) |
| Wikidata | [Q2399689](https://www.wikidata.org/wiki/Q2399689) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|park\|château |
| Administrative area | Antwerp |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | https://inventaris.onroerenderfgoed.be/dibe/relict/11641 |

## What the model contains

Tier **T1**, status `outline-only`, 207 elements (outline 1, marker 1, water 2, road 74, zone 8, building 407, waterway 1).

Evidence: documented 0, mapped 207, inferred 0, derived 0; heights documented 8, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/52083134 historic=castle Q2399689 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 407 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.17053/4.40356) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|park\|château; sitelinks=4; wikidata:Q2399689 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 207 elements); data/traces/steytelinck-q2399689.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
