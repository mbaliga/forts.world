# Bateria de Costa de l'Ametlla de Mar

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bateria-de-costa-de-l-ametlla-de-mar-q129853775` |
| Coordinates | 40.8664, 0.79103 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.8664/0.79103)) |
| Wikidata | [Q129853775](https://www.wikidata.org/wiki/Q129853775) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | L'Ametlla de Mar |
| Inception | 1937 |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 32 elements (outline 1, road 25, building 3, coastline 1, waterway 1, water 1).

Evidence: documented 0, mapped 32, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/191786226 historic=ruins 463 m from ledger point
- origin moved 463 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":2,"medianInside":6.6,"medianOutside":12.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.8664/0.79103) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q129853775 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 32 elements); data/traces/bateria-de-costa-de-l-ametlla-de-mar-q129853775.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
