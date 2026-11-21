# Torre de Son Durí

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-son-duri-q890748` |
| Coordinates | 39.3625, 2.95333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.3625/2.95333)) |
| Wikidata | [Q890748](https://www.wikidata.org/wiki/Q890748) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Campos |
| Inception | 1595 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 79 elements (outline 1, road 39, building 30, waterway 2, zone 1, wall 3, coastline 2, water 1).

Evidence: documented 0, mapped 79, inferred 0, derived 1; heights documented 1, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/84802939 historic=yes Q890748 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":154,"medianInside":0.2,"medianOutside":4.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.3625/2.95333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=3; wikidata:Q890748 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 79 elements); data/traces/torre-de-son-duri-q890748.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
