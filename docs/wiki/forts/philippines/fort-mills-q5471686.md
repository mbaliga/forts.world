# Fort Mills

> Philippines · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-mills-q5471686` |
| Coordinates | 14.38333, 120.56667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/14.38333/120.56667)) |
| Wikidata | [Q5471686](https://www.wikidata.org/wiki/Q5471686) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Inception | 1910 |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 11 elements (outline 1, road 7, building 1, coastline 1, waterway 1).

Evidence: documented 0, mapped 11, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/184251198 historic=ruins 67 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 66 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/14.38333/120.56667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q5471686 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 11 elements); data/traces/fort-mills-q5471686.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/philippines.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
