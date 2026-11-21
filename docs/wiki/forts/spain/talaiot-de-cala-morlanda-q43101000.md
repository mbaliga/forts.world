# Talaiot de Cala Morlanda

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `talaiot-de-cala-morlanda-q43101000` |
| Coordinates | 39.5583, 3.37257 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.5583/3.37257)) |
| Wikidata | [Q43101000](https://www.wikidata.org/wiki/Q43101000) (CC0) |
| Wikidata class | fortification |
| Types | talaiot |
| Administrative area | Manacor |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 310 elements (outline 1, road 35, coastline 2, building 269, retaining-wall 1, water 2).

Evidence: documented 0, mapped 310, inferred 0, derived 2; heights documented 43, inferred 0, unknown 227.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/356325602 historic=archaeological_site 25 m from ledger point
- origin moved 20 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":40,"medianInside":0,"medianOutside":7.9}
- sea-1: DEM check ok {"cells":71,"medianInside":0,"medianOutside":8.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.5583/3.37257) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; talaiot; sitelinks=1; wikidata:Q43101000 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 310 elements); data/traces/talaiot-de-cala-morlanda-q43101000.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
