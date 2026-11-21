# Berwick-upon-Tweed

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `berwick-upon-tweed-q504678` |
| Coordinates | 55.76917, -2.0025 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.76917/-2.0025)) |
| Wikidata | [Q504678](https://www.wikidata.org/wiki/Q504678) (CC0) |
| Wikidata class | fort |
| Types | town\|fortified town\|civil parish |
| Administrative area | Northumberland |
| Wikipedia language editions | 54 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 266 elements (outline 1, marker 1, road 83, building 151, wall 18, zone 3, coastline 2, waterway 1, retaining-wall 6).

Evidence: documented 0, mapped 266, inferred 0, derived 0; heights documented 71, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/71319871 historic=yes 232 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 234 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.76917/-2.0025) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; town\|fortified town\|civil parish; sitelinks=54; wikidata:Q504678 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 266 elements); data/traces/berwick-upon-tweed-q504678.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
