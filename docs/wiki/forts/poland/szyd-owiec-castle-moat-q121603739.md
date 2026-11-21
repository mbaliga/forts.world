# Szydłowiec Castle moat

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `szyd-owiec-castle-moat-q121603739` |
| Coordinates | 51.22649, 20.85382 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.22649/20.85382)) |
| Wikidata | [Q121603739](https://www.wikidata.org/wiki/Q121603739) (CC0) |
| Wikidata class | fortification |
| Types | moat\|architectural heritage monument |
| Administrative area | Szydłowiec |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 256 elements (outline 1, marker 1, road 106, building 112, wall 4, waterway 8, water 1, zone 23).

Evidence: documented 0, mapped 256, inferred 0, derived 0; heights documented 0, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/189804604 historic=castle Q9386749 17 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.22649/20.85382) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; moat\|architectural heritage monument; sitelinks=0; wikidata:Q121603739 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 256 elements); data/traces/szyd-owiec-castle-moat-q121603739.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
