# Samkari Fort

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `samkari-fort-q136520875` |
| Coordinates | 40.37685, 41.88506 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.37685/41.88506)) |
| Wikidata | [Q136520875](https://www.wikidata.org/wiki/Q136520875) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 6 elements (outline 1, road 4).

Evidence: documented 0, mapped 6, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/313140150 historic=castle 26 m from ledger point
- origin moved 27 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.37685/41.88506) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q136520875 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 6 elements); data/traces/samkari-fort-q136520875.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
