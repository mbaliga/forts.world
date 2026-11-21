# Schloss Schleiz

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-schleiz-q2243374` |
| Coordinates | 50.57676, 11.81199 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.57676/11.81199)) |
| Wikidata | [Q2243374](https://www.wikidata.org/wiki/Q2243374) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Schleiz |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `description` | ehemaliges Schloss Schleiz - am 08.04.1945 bis auf die zwei Türme völlig zerstört |

## What the model contains

Tier **T1**, status `outline+walls`, 264 elements (outline 1, marker 1, road 118, building 396, waterway 3, retaining-wall 9, zone 2, wall 8, water 2).

Evidence: documented 0, mapped 264, inferred 0, derived 0; heights documented 11, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1335993520 historic=castle Q2243374 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 396 mapped (trace size budget); the rest of the town is not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.57676/11.81199) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=3; wikidata:Q2243374 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 264 elements); data/traces/schloss-schleiz-q2243374.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
