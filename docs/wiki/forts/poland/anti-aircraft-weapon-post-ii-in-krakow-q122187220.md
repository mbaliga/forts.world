# Anti-aircraft weapon post II in Kraków

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `anti-aircraft-weapon-post-ii-in-krakow-q122187220` |
| Coordinates | 50.04171, 19.95771 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.04171/19.95771)) |
| Wikidata | [Q122187220](https://www.wikidata.org/wiki/Q122187220) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Kraków |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 231 elements (outline 1, marker 18, road 507, zone 57, wall 58, building 358, cliff 7, retaining-wall 11).

Evidence: documented 0, mapped 231, inferred 0, derived 0; heights documented 52, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1302839752 historic=fort Q122263058 104 m from ledger point
- pruned to the outline plus 150 m: 1017 -> 558 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 169 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 298 mapped (trace size budget); minor lanes are not drawn
- origin moved 106 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.04171/19.95771) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q122187220 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 231 elements); data/traces/anti-aircraft-weapon-post-ii-in-krakow-q122187220.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
