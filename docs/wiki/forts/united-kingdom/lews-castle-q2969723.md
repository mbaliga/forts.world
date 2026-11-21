# Lews Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lews-castle-q2969723` |
| Coordinates | 58.21161, -6.39433 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.21161/-6.39433)) |
| Wikidata | [Q2969723](https://www.wikidata.org/wiki/Q2969723) (CC0) |
| Wikidata class | castle |
| Types | castle\|castle\|country house |
| Administrative area | Outer Hebrides |
| Inception | 1846 |
| Designations | category A listed building |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | castle |
| OSM `website` | https://www.lews-castle.co.uk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 110 elements (outline 1, marker 3, building 9, coastline 1, road 82, waterway 4, zone 3, wall 5, retaining-wall 1, water 1).

Evidence: documented 0, mapped 110, inferred 0, derived 1; heights documented 1, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/59304725 historic=castle Q2969723 6 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":18,"medianInside":6.4,"medianOutside":27.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.21161/-6.39433) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|castle\|country house; sitelinks=12; wikidata:Q2969723 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 110 elements); data/traces/lews-castle-q2969723.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
