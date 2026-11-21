# Kostroma Kremlin

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kostroma-kremlin-q4235581` |
| Coordinates | 57.76361, 40.92778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.76361/40.92778)) |
| Wikidata | [Q4235581](https://www.wikidata.org/wiki/Q4235581) (CC0) |
| Wikidata class | fort |
| Types | kremlin |
| Administrative area | Kostroma |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 219 elements (outline 1, marker 6, road 144, building 34, zone 16, waterway 1, wall 11, water 1, cliff 5).

Evidence: documented 0, mapped 219, inferred 0, derived 0; heights documented 16, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/347643692 historic=archaeological_site 72 m from ledger point
- origin moved 71 m from the ledger point to the centre of the mapped site
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.76361/40.92778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; kremlin; sitelinks=2; wikidata:Q4235581 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 219 elements); data/traces/kostroma-kremlin-q4235581.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
