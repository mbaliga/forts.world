# Fort de l'Îlette de Kermorvan

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-l-ilette-de-kermorvan-q2739686` |
| Coordinates | 48.36925, -4.78718 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.36925/-4.78718)) |
| Wikidata | [Q2739686](https://www.wikidata.org/wiki/Q2739686) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Le Conquet |
| Inception | 1847 |
| Wikipedia language editions | 5 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 11 elements (outline 1, road 7, coastline 2, water 1).

Evidence: documented 0, mapped 11, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3618197 historic=ruins 19 m from ledger point
- island ring (6116 m2) cut out of sea-0
- origin moved 24 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":335,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.36925/-4.78718) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q2739686 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 11 elements); data/traces/fort-de-l-ilette-de-kermorvan-q2739686.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
