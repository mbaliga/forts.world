# Kolomna Kremlin

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kolomna-kremlin-q1551216` |
| Coordinates | 55.1034, 38.75265 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.1034/38.75265)) |
| Wikidata | [Q1551216](https://www.wikidata.org/wiki/Q1551216) (CC0) |
| Wikidata class | fort |
| Types | kremlin\|human settlement\|architectural landmark |
| Administrative area | Kolomna |
| Inception | 1525 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 9 |
| OSM `historic` | yes |
| OSM `heritage` | 3 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 373 elements (outline 1, marker 5, road 180, waterway 2, building 103, cliff 1, wall 28, zone 52).

Evidence: documented 0, mapped 373, inferred 0, derived 0; heights documented 32, inferred 0, unknown 100.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/169684511 historic=yes 188 m from ledger point
- origin moved 191 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.1034/38.75265) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; kremlin\|human settlement\|architectural landmark; sitelinks=9; wikidata:Q1551216 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 373 elements); data/traces/kolomna-kremlin-q1551216.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
