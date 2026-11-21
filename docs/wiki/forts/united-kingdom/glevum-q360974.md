# Glevum

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `glevum-q360974` |
| Coordinates | 51.8641, -2.24648 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.8641/-2.24648)) |
| Wikidata | [Q360974](https://www.wikidata.org/wiki/Q360974) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|archaeological site |
| Administrative area | Gloucester |
| Designations | scheduled monument |
| Wikipedia language editions | 7 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 9, road 153, building 317, wall 17, retaining-wall 1, zone 2).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 24, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/485838762 historic=ruins 54 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 317 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 153 mapped (trace size budget); minor lanes are not drawn
- origin moved 55 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.8641/-2.24648) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|archaeological site; sitelinks=7; wikidata:Q360974 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 300 elements); data/traces/glevum-q360974.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
