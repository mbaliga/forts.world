# Pile Gate, Dubrovnik

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pile-gate-dubrovnik-q3509061` |
| Coordinates | 42.64174, 18.10685 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.64174/18.10685)) |
| Wikidata | [Q3509061](https://www.wikidata.org/wiki/Q3509061) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Dubrovnik |
| Designations | Cultural heritage monument in Croatia |
| Wikipedia language editions | 10 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 332 elements (outline 1, marker 1, road 221, wall 38, retaining-wall 11, building 323, cliff 3, water 3, coastline 2, zone 2).

Evidence: documented 0, mapped 332, inferred 0, derived 1; heights documented 0, inferred 0, unknown 170.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/171296971 historic=citywalls 190 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 323 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 221 mapped (trace size budget); minor lanes are not drawn
- origin moved 189 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":7,"medianInside":-0.7,"medianOutside":41.6}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.64174/18.10685) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=10; wikidata:Q3509061 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 332 elements); data/traces/pile-gate-dubrovnik-q3509061.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
