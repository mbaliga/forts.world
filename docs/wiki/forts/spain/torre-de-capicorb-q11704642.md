# Torre de Capicorb

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-capicorb-q11704642` |
| Coordinates | 40.20925, 0.26019 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.20925/0.26019)) |
| Wikidata | [Q11704642](https://www.wikidata.org/wiki/Q11704642) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Alcalà de Xivert |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline-only`, 20 elements (outline 1, road 13, coastline 1, waterway 1, building 3, water 1).

Evidence: documented 0, mapped 20, inferred 0, derived 1; heights documented 1, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1412650682 historic=building 2 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":10,"medianInside":0.2,"medianOutside":2.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.20925/0.26019) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=4; wikidata:Q11704642 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 20 elements); data/traces/torre-de-capicorb-q11704642.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
