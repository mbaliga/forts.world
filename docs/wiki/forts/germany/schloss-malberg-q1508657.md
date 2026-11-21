# Schloss Malberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-malberg-q1508657` |
| Coordinates | 50.04617, 6.57922 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.04617/6.57922)) |
| Wikidata | [Q1508657](https://www.wikidata.org/wiki/Q1508657) (CC0) |
| Wikidata class | castle |
| Types | castle\|château\|royal palace |
| Administrative area | Malberg |
| Designations | cultural heritage monument in Rhineland-Palatinate |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `website` | https://www.schloss-malberg.de/ |

## What the model contains

Tier **T1**, status `outline-only`, 167 elements (outline 1, marker 3, road 30, waterway 7, building 376, zone 1, retaining-wall 5).

Evidence: documented 0, mapped 167, inferred 0, derived 0; heights documented 1, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/115625830 historic=castle Q1508657 20 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 376 mapped (trace size budget); the rest of the town is not drawn
- origin moved 21 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.04617/6.57922) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château\|royal palace; sitelinks=4; wikidata:Q1508657 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 167 elements); data/traces/schloss-malberg-q1508657.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
