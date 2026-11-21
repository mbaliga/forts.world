# Brodick Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brodick-castle-q924505` |
| Coordinates | 55.59393, -5.1508 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.59393/-5.1508)) |
| Wikidata | [Q924505](https://www.wikidata.org/wiki/Q924505) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | North Ayrshire |
| Inception | 1510 |
| Designations | category A listed building |
| Wikipedia language editions | 16 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 99 elements (outline 1, road 62, coastline 1, waterway 3, building 25, zone 1, water 2, wall 4).

Evidence: documented 0, mapped 99, inferred 0, derived 1; heights documented 5, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/133390895 historic=castle Q924505 2 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3,"medianInside":5.2,"medianOutside":34.5}
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.59393/-5.1508) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=16; wikidata:Q924505 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 99 elements); data/traces/brodick-castle-q924505.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
