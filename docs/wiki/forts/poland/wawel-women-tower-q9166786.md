# Wawel Women Tower

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wawel-women-tower-q9166786` |
| Coordinates | 50.0531, 19.9353 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.0531/19.9353)) |
| Wikidata | [Q9166786](https://www.wikidata.org/wiki/Q9166786) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Kraków |
| Designations | cultural property protection in Poland |
| Wikipedia language editions | 4 |
| OSM `historic` | fortification |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 214 elements (outline 1, marker 55, road 216, building 65, waterway 3, zone 118, wall 63, retaining-wall 2, water 1).

Evidence: documented 0, mapped 214, inferred 0, derived 0; heights documented 48, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/295393286 historic=fortification 5 m from ledger point
- pruned to the outline plus 150 m: 524 -> 226 elements
- roads capped: kept the 80 longest of 93 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the outline centroid
- 28 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.0531/19.9353) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=4; wikidata:Q9166786 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 214 elements); data/traces/wawel-women-tower-q9166786.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
