# Trier Gate

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `trier-gate-q30731139` |
| Coordinates | 50.00497, 5.72208 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.00497/5.72208)) |
| Wikidata | [Q30731139](https://www.wikidata.org/wiki/Q30731139) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Bastogne |
| Designations | protected heritage property in Wallonia\|Exceptional heritage property of Wallonia |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 252 elements (outline 1, marker 6, road 120, building 420, wall 2, waterway 1, zone 2).

Evidence: documented 0, mapped 252, inferred 0, derived 0; heights documented 15, inferred 0, unknown 107.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/106654550 historic=city_gate Q30731139 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 420 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.00497/5.72208) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q30731139 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/trier-gate-q30731139.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 252 elements; outline osm:way/106654550 historic=city_gate Q30731139 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
