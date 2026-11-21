# La Fortalesa

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `la-fortalesa-q43142268` |
| Coordinates | 39.90379, 3.11021 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.90379/3.11021)) |
| Wikidata | [Q43142268](https://www.wikidata.org/wiki/Q43142268) (CC0) |
| Wikidata class | fort |
| Types | building\|fortification |
| Administrative area | Pollença |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 174 elements (outline 1, coastline 1, zone 2, road 112, wall 5, building 9, cliff 1, retaining-wall 41, water 2).

Evidence: documented 0, mapped 174, inferred 0, derived 2; heights documented 0, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/349340722 historic=castle 2 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":60,"medianInside":0,"medianOutside":6.6}
- sea-1: DEM check ok {"cells":125,"medianInside":0,"medianOutside":12.8}
- 11 DEM cells below -3 m (bathymetry) clamped to -3 m
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.90379/3.11021) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; building\|fortification; sitelinks=1; wikidata:Q43142268 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 174 elements); data/traces/la-fortalesa-q43142268.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
