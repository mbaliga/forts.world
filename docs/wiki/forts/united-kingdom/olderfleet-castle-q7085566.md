# Olderfleet Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `olderfleet-castle-q7085566` |
| Coordinates | 54.845, -5.809 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.845/-5.809)) |
| Wikidata | [Q7085566](https://www.wikidata.org/wiki/Q7085566) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 41 elements (outline 1, road 31, coastline 1, building 5, zone 1, water 2).

Evidence: documented 0, mapped 41, inferred 0, derived 2; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/523503187 historic=castle Q7085566 581 m from ledger point
- origin moved 581 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":131,"medianInside":19,"medianOutside":3.8}
- sea-1: DEM check failed {"cells":98,"medianInside":5,"medianOutside":3.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.845/-5.809) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q7085566 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 41 elements); data/traces/olderfleet-castle-q7085566.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
