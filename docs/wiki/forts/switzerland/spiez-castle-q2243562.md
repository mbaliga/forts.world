# Spiez Castle

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `spiez-castle-q2243562` |
| Coordinates | 46.68942, 7.68742 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.68942/7.68742)) |
| Wikidata | [Q2243562](https://www.wikidata.org/wiki/Q2243562) (CC0) |
| Wikidata class | castle |
| Types | castle\|built structure\|museum building\|memory institution |
| Administrative area | Spiez |
| Inception | 1200 |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.schloss-spiez.ch |

## What the model contains

Tier **T1**, status `outline+walls`, 200 elements (outline 1, marker 1, road 85, building 65, wall 36, zone 12).

Evidence: documented 0, mapped 200, inferred 0, derived 0; heights documented 1, inferred 0, unknown 100.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/212739946 historic=castle Q2243562 3 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.68942/7.68742) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|built structure\|museum building\|memory institution; sitelinks=9; wikidata:Q2243562 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 200 elements); data/traces/spiez-castle-q2243562.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
