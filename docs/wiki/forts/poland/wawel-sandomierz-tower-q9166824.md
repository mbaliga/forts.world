# Wawel Sandomierz Tower

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wawel-sandomierz-tower-q9166824` |
| Coordinates | 50.05283, 19.93508 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.05283/19.93508)) |
| Wikidata | [Q9166824](https://www.wikidata.org/wiki/Q9166824) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|architectural heritage monument |
| Administrative area | Kraków |
| Inception | 1500 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 6 |
| OSM `historic` | fortification |
| OSM `description` | Gothic defense tower with views of Cracow. The visit requires climbing 137 steps. Children under 13 must be accompanied. |

## What the model contains

Tier **T1**, status `outline+walls`, 396 elements (outline 1, marker 16, road 191, building 54, waterway 3, zone 107, wall 62, retaining-wall 2, water 1).

Evidence: documented 0, mapped 396, inferred 0, derived 0; heights documented 65, inferred 0, unknown 53.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/25516318 historic=fortification Q9166824 2 m from ledger point
- roads capped: kept the 150 longest of 191 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the outline centroid
- 59 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.05283/19.93508) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|architectural heritage monument; sitelinks=6; wikidata:Q9166824 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 396 elements); data/traces/wawel-sandomierz-tower-q9166824.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
