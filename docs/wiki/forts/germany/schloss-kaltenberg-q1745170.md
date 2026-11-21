# Schloss Kaltenberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-kaltenberg-q1745170` |
| Coordinates | 48.13169, 10.99408 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.13169/10.99408)) |
| Wikidata | [Q1745170](https://www.wikidata.org/wiki/Q1745170) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|brewery\|château\|archaeological site |
| Administrative area | Geltendorf |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | http://www.kaltenberg.com |

## What the model contains

Tier **T1**, status `outline+walls`, 122 elements (outline 1, road 38, zone 8, building 73, waterway 1, wall 1).

Evidence: documented 0, mapped 122, inferred 0, derived 0; heights documented 31, inferred 0, unknown 43.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/298512304 historic=castle Q1745170 10 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.13169/10.99408) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|brewery\|château\|archaeological site; sitelinks=6; wikidata:Q1745170 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 122 elements); data/traces/schloss-kaltenberg-q1745170.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
