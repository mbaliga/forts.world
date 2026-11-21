# Carbonera Lighthouse

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `carbonera-lighthouse-q30069010` |
| Coordinates | 36.24456, -5.3013 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.24456/-5.3013)) |
| Wikidata | [Q30069010](https://www.wikidata.org/wiki/Q30069010) (CC0) |
| Wikidata class | fortification |
| Types | lighthouse\|monument\|watchtower |
| Administrative area | San Roque |
| Inception | 1588 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 12 elements (outline 1, road 5, coastline 1, building 1, zone 2, wall 1, water 1).

Evidence: documented 0, mapped 12, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/668124468 historic=ruins 40 m from ledger point
- origin moved 42 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":62,"medianInside":0,"medianOutside":20.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.24456/-5.3013) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; lighthouse\|monument\|watchtower; sitelinks=4; wikidata:Q30069010 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 12 elements); data/traces/carbonera-lighthouse-q30069010.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
