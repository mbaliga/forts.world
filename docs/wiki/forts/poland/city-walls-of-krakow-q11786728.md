# City walls of Kraków

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-krakow-q11786728` |
| Coordinates | 50.06484, 19.9415 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.06484/19.9415)) |
| Wikidata | [Q11786728](https://www.wikidata.org/wiki/Q11786728) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|architectural heritage monument\|city walls |
| Administrative area | Kraków |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 4 |
| OSM `historic` | fortification |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 230 elements (outline 1, marker 21, road 309, zone 88, building 210, wall 55, retaining-wall 2).

Evidence: documented 0, mapped 230, inferred 0, derived 0; heights documented 55, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/25247417 historic=fortification 2 m from ledger point
- pruned to the outline plus 150 m: 686 -> 367 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 96 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 182 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid
- 56 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.06484/19.9415) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|architectural heritage monument\|city walls; sitelinks=4; wikidata:Q11786728 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 230 elements); data/traces/city-walls-of-krakow-q11786728.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
