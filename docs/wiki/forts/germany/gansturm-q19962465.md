# Gänsturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gansturm-q19962465` |
| Coordinates | 48.3991, 10.0008 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.3991/10.0008)) |
| Wikidata | [Q19962465](https://www.wikidata.org/wiki/Q19962465) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Ulm |
| Inception | 1360 |
| Designations | cultural heritage monument in Baden-Württemberg |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 147 elements (outline 1, marker 4, road 296, water 1, waterway 2, building 243, wall 12).

Evidence: documented 0, mapped 147, inferred 0, derived 0; heights documented 14, inferred 0, unknown 51.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/226361639 historic=city_gate Q19962465 7 m from ledger point
- pruned to the outline plus 150 m: 559 -> 265 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 128 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 130 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.3991/10.0008) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q19962465 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 286 elements); data/traces/gansturm-q19962465.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 147 elements; outline osm:way/226361639 historic=city_gate Q19962465 7 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
