# Torre de Belén

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-belen-q15529756` |
| Coordinates | 37.87676, -4.7834 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.87676/-4.7834)) |
| Wikidata | [Q15529756](https://www.wikidata.org/wiki/Q15529756) (CC0) |
| Wikidata class | fortification |
| Types | tower\|city gate\|archaeological site |
| Administrative area | Córdoba |
| Wikipedia language editions | 7 |
| OSM `historic` | archaeological_site |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 354 elements (outline 1, marker 4, road 314, waterway 4, zone 1, wall 45, building 179, water 21, retaining-wall 7).

Evidence: documented 0, mapped 354, inferred 0, derived 0; heights documented 112, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/273006591 historic=archaeological_site 44 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 179 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 314 mapped (trace size budget); minor lanes are not drawn
- origin moved 42 m from the ledger point to the outline centroid
- 26 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.87676/-4.7834) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|city gate\|archaeological site; sitelinks=7; wikidata:Q15529756 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 354 elements); data/traces/torre-de-belen-q15529756.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
