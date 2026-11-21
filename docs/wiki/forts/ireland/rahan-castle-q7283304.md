# Rahan Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rahan-castle-q7283304` |
| Coordinates | 54.61884, -8.38037 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.61884/-8.38037)) |
| Wikidata | [Q7283304](https://www.wikidata.org/wiki/Q7283304) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | County Donegal |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 17 elements (outline 1, coastline 2, waterway 1, road 6, building 6, water 1).

Evidence: documented 0, mapped 17, inferred 0, derived 1; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/840571945 historic=archaeological_site 497 m from ledger point
- origin moved 496 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":75,"medianInside":2.2,"medianOutside":9.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.61884/-8.38037) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q7283304 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 17 elements); data/traces/rahan-castle-q7283304.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
