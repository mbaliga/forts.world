# Old Dongola

> Sudan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `old-dongola-q433112` |
| Coordinates | 18.22336, 30.7432 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.22336/30.7432)) |
| Wikidata | [Q433112](https://www.wikidata.org/wiki/Q433112) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|human settlement\|archaeological site |
| Designations | Tentative World Heritage Site |
| Wikipedia language editions | 23 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 10 elements (outline 1, marker 2, waterway 1, zone 3, wall 1, road 2).

Evidence: documented 0, mapped 10, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/194217480 historic=archaeological_site Q433112 335 m from ledger point
- origin moved 355 m from the ledger point to the centre of the mapped site
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.22336/30.7432) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|human settlement\|archaeological site; sitelinks=23; wikidata:Q433112 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 10 elements); data/traces/old-dongola-q433112.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sudan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
