# Gylen Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gylen-castle-q1357566` |
| Coordinates | 56.37936, -5.55656 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.37936/-5.55656)) |
| Wikidata | [Q1357566](https://www.wikidata.org/wiki/Q1357566) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Argyll and Bute |
| Inception | 1582 |
| Designations | scheduled monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 27 elements (outline 1, coastline 10, road 9, cliff 3, waterway 1, zone 1, wall 1, water 1).

Evidence: documented 0, mapped 27, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/275932847 historic=castle Q1357566 7 m from ledger point
- island ring (670 m2) cut out of sea-0
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":666,"medianInside":2.2,"medianOutside":12.6}
- 45 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.37936/-5.55656) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=7; wikidata:Q1357566 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 27 elements); data/traces/gylen-castle-q1357566.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
