# Samson Fort

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `samson-fort-q109037936` |
| Coordinates | 50.4658, 4.9982 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.4658/4.9982)) |
| Wikidata | [Q109037936](https://www.wikidata.org/wiki/Q109037936) (CC0) |
| Wikidata class | castle |
| Types | castle\|fort |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | yes |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 179 elements (outline 1, road 38, zone 16, waterway 2, building 114, cliff 5, retaining-wall 2, wall 1).

Evidence: documented 0, mapped 179, inferred 0, derived 0; heights documented 0, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/906380868 historic=castle Q109037936 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.4658/4.9982) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fort; sitelinks=3; wikidata:Q109037936 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 179 elements); data/traces/samson-fort-q109037936.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
