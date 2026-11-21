# Thurso

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `thurso-q526576` |
| Coordinates | 58.59611, -3.52111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.59611/-3.52111)) |
| Wikidata | [Q526576](https://www.wikidata.org/wiki/Q526576) (CC0) |
| Wikidata class | fortification |
| Types | town\|small burgh |
| Administrative area | Highland |
| Wikipedia language editions | 40 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, road 94, building 113, waterway 1, coastline 1, wall 86, zone 12, retaining-wall 5, water 2).

Evidence: documented 0, mapped 315, inferred 0, derived 2; heights documented 2, inferred 0, unknown 202.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/406360134 historic=ruins Q17569304 350 m from ledger point
- origin moved 350 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":8,"medianInside":2,"medianOutside":5.8}
- sea-1: DEM check ok {"cells":51,"medianInside":3.3,"medianOutside":6}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.59611/-3.52111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; town\|small burgh; sitelinks=40; wikidata:Q526576 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/thurso-q526576.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
