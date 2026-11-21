# Milecastle 80

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `milecastle-80-q6851201` |
| Coordinates | 54.95291, -3.21515 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.95291/-3.21515)) |
| Wikidata | [Q6851201](https://www.wikidata.org/wiki/Q6851201) (CC0) |
| Wikidata class | castle |
| Types | milecastle |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 139 elements (outline 1, marker 1, waterway 2, road 30, building 96, zone 1, coastline 1, wall 6, water 1).

Evidence: documented 0, mapped 139, inferred 0, derived 1; heights documented 7, inferred 0, unknown 95.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1023927179 historic=archaeological_site Q3843489 7 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":255,"medianInside":2.5,"medianOutside":12.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.95291/-3.21515) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; milecastle; sitelinks=2; wikidata:Q6851201 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 139 elements); data/traces/milecastle-80-q6851201.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
