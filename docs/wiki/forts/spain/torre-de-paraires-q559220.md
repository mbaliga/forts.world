# Torre de Paraires

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-paraires-q559220` |
| Coordinates | 39.55083, 2.62389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.55083/2.62389)) |
| Wikidata | [Q559220](https://www.wikidata.org/wiki/Q559220) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Palma |
| Inception | 1300 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 99 elements (outline 1, road 79, building 13, wall 1, zone 2, coastline 1, water 2).

Evidence: documented 0, mapped 99, inferred 0, derived 2; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/218840679 historic=castle Q559220 13 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":391,"medianInside":4.2,"medianOutside":3.9}
- sea-1: DEM check ok {"cells":158,"medianInside":0,"medianOutside":9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.55083/2.62389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=5; wikidata:Q559220 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 99 elements); data/traces/torre-de-paraires-q559220.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
