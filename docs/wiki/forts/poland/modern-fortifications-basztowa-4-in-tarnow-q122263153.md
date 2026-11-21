# Modern fortifications, Basztowa 4 in Tarnów

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `modern-fortifications-basztowa-4-in-tarnow-q122263153` |
| Coordinates | 50.01369, 20.98799 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.01369/20.98799)) |
| Wikidata | [Q122263153](https://www.wikidata.org/wiki/Q122263153) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Tarnów |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 233 elements (outline 1, marker 13, waterway 1, road 186, building 289, zone 146, retaining-wall 1, wall 50, water 2).

Evidence: documented 0, mapped 233, inferred 0, derived 0; heights documented 2, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/213811487 historic=yes 82 m from ledger point
- pruned to the outline plus 150 m: 689 -> 369 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 192 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 84 mapped (trace size budget); minor lanes are not drawn
- origin moved 82 m from the ledger point to the outline centroid
- 37 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.01369/20.98799) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q122263153 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 233 elements); data/traces/modern-fortifications-basztowa-4-in-tarnow-q122263153.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
