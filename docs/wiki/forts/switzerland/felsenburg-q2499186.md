# Felsenburg

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `felsenburg-q2499186` |
| Coordinates | 46.9494, 7.459 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.9494/7.459)) |
| Wikidata | [Q2499186](https://www.wikidata.org/wiki/Q2499186) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bern |
| Designations | Swiss cultural property of cantonal or local significance |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |
| OSM `heritage` | 2 |
| OSM `description` | Die Felsenburg, Klösterlistutz 4 ist Teil des Ensembles "Untertorbrücke und Felsenburg |

## What the model contains

Tier **T1**, status `outline+walls`, 354 elements (outline 1, marker 3, road 254, building 186, retaining-wall 52, water 2, wall 12, zone 9, waterway 5).

Evidence: documented 0, mapped 354, inferred 0, derived 0; heights documented 10, inferred 0, unknown 174.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/231253647 historic=yes Q2499186 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 186 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 254 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.9494/7.459) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q2499186 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 354 elements); data/traces/felsenburg-q2499186.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
