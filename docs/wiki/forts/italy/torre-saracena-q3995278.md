# Torre Saracena

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-saracena-q3995278` |
| Coordinates | 38.39426, 15.86359 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.39426/15.86359)) |
| Wikidata | [Q3995278](https://www.wikidata.org/wiki/Q3995278) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Palmi |
| Inception | 1565 |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 72 elements (outline 1, coastline 1, road 17, building 50, zone 1, wall 1, water 1).

Evidence: documented 0, mapped 72, inferred 0, derived 1; heights documented 0, inferred 0, unknown 51.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/157689710 historic=fort Q69546686 365 m from ledger point
- origin moved 367 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":127,"medianInside":0,"medianOutside":8.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.39426/15.86359) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=4; wikidata:Q3995278 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 72 elements); data/traces/torre-saracena-q3995278.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
