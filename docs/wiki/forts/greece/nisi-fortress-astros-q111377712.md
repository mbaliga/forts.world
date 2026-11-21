# Nisi fortress, Astros

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nisi-fortress-astros-q111377712` |
| Coordinates | 37.42127, 22.76784 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.42127/22.76784)) |
| Wikidata | [Q111377712](https://www.wikidata.org/wiki/Q111377712) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|archaeological site |
| Administrative area | North Kynouria Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 99 elements (outline 1, marker 1, road 34, coastline 1, building 52, wall 5, cliff 2, zone 1, water 1).

Evidence: documented 0, mapped 99, inferred 0, derived 1; heights documented 0, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/515833135 historic=citywalls 332 m from ledger point
- origin moved 333 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":3,"medianInside":21.5,"medianOutside":29.5}
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.42127/22.76784) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|archaeological site; sitelinks=0; wikidata:Q111377712 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 99 elements); data/traces/nisi-fortress-astros-q111377712.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
