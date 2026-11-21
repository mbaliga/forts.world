# Kempt Tower

> Jersey · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kempt-tower-q15235459` |
| Coordinates | 49.22121, -2.22758 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.22121/-2.22758)) |
| Wikidata | [Q15235459](https://www.wikidata.org/wiki/Q15235459) (CC0) |
| Wikidata class | fortification |
| Types | Martello tower |
| Administrative area | Saint Ouen |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 41 elements (outline 1, road 23, building 11, coastline 1, wall 1, water 4).

Evidence: documented 0, mapped 41, inferred 0, derived 1; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/257001357 historic=archaeological_site 27 m from ledger point
- origin moved 26 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":175,"medianInside":0,"medianOutside":7.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.22121/-2.22758) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Martello tower; sitelinks=2; wikidata:Q15235459 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 41 elements); data/traces/kempt-tower-q15235459.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/jersey.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
