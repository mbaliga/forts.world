# Broch of Mousa

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `broch-of-mousa-q923376` |
| Coordinates | 59.99528, -1.18206 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.99528/-1.18206)) |
| Wikidata | [Q923376](https://www.wikidata.org/wiki/Q923376) (CC0) |
| Wikidata class | fortification |
| Types | broch |
| Administrative area | Shetland Islands |
| Designations | scheduled monument |
| Wikipedia language editions | 14 |
| OSM `historic` | ruins |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 20 elements (outline 1, road 3, water 2, coastline 1, wall 13).

Evidence: documented 0, mapped 20, inferred 0, derived 1; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/495466411 historic=ruins 154 m from ledger point
- origin moved 155 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":68,"medianInside":2,"medianOutside":12.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.99528/-1.18206) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch; sitelinks=14; wikidata:Q923376 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 20 elements); data/traces/broch-of-mousa-q923376.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
