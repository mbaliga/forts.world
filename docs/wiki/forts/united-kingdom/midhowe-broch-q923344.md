# Midhowe Broch

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `midhowe-broch-q923344` |
| Coordinates | 59.15747, -3.10039 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.15747/-3.10039)) |
| Wikidata | [Q923344](https://www.wikidata.org/wiki/Q923344) (CC0) |
| Wikidata class | fort |
| Types | broch\|archaeological site\|promontory fort |
| Administrative area | Orkney Islands |
| Designations | scheduled monument |
| Wikipedia language editions | 6 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 27 elements (outline 1, marker 1, coastline 1, road 10, building 4, wall 8, zone 1, water 1).

Evidence: documented 0, mapped 27, inferred 0, derived 1; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/114772151 historic=archaeological_site Q923344 4 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":120,"medianInside":8.3,"medianOutside":18.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.15747/-3.10039) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; broch\|archaeological site\|promontory fort; sitelinks=6; wikidata:Q923344 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 27 elements); data/traces/midhowe-broch-q923344.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
