# Fort Verudella

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-verudella-q12631119` |
| Coordinates | 44.83528, 13.83278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.83528/13.83278)) |
| Wikidata | [Q12631119](https://www.wikidata.org/wiki/Q12631119) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Pula |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 110 elements (outline 1, road 46, building 52, coastline 2, wall 2, retaining-wall 2, zone 2, water 2).

Evidence: documented 0, mapped 110, inferred 0, derived 2; heights documented 1, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/128996247 historic=fort Q12631119 17 m from ledger point
- origin moved 19 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":54,"medianInside":0,"medianOutside":18.2}
- sea-1: DEM check ok {"cells":3,"medianInside":-0.5,"medianOutside":17.3}
- 16 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.83528/13.83278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q12631119 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 110 elements); data/traces/fort-verudella-q12631119.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
