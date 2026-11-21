# Styrum

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `styrum-q315145` |
| Coordinates | 51.44365, 6.85548 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.44365/6.85548)) |
| Wikidata | [Q315145](https://www.wikidata.org/wiki/Q315145) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Mülheim an der Ruhr |
| Inception | 1289 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 217 elements (outline 1, road 82, water 2, building 124, wall 3, waterway 1, zone 4).

Evidence: documented 0, mapped 217, inferred 0, derived 0; heights documented 39, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/102734767 historic=castle Q315145 8 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.44365/6.85548) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=7; wikidata:Q315145 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 217 elements); data/traces/styrum-q315145.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
