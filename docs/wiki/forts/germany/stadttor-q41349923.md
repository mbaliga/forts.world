# Stadttor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadttor-q41349923` |
| Coordinates | 49.80321, 10.16369 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.80321/10.16369)) |
| Wikidata | [Q41349923](https://www.wikidata.org/wiki/Q41349923) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Dettelbach |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 333 elements (outline 1, marker 3, road 151, waterway 1, wall 53, building 276, zone 5).

Evidence: documented 0, mapped 333, inferred 0, derived 0; heights documented 31, inferred 0, unknown 142.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/114947744 historic=citywalls Q98495754 12 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 276 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 151 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the centre of the mapped site
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.80321/10.16369) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q41349923 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 333 elements); data/traces/stadttor-q41349923.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
