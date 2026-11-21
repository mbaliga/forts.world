# Dumfries

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dumfries-q652035` |
| Coordinates | 55.06667, -3.61667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.06667/-3.61667)) |
| Wikidata | [Q652035](https://www.wikidata.org/wiki/Q652035) (CC0) |
| Wikidata class | fortification |
| Types | town\|large burgh |
| Administrative area | Dumfries and Galloway |
| Wikipedia language editions | 51 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline-only`, 180 elements (outline 1, coastline 3, road 40, waterway 2, water 3, building 129, zone 2).

Evidence: documented 0, mapped 180, inferred 0, derived 2; heights documented 11, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1408260682 historic=monument 170 m from ledger point
- origin moved 170 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":35,"medianInside":7.1,"medianOutside":23.3}
- sea-1: DEM check failed {"cells":393,"medianInside":23.5,"medianOutside":11}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.06667/-3.61667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; town\|large burgh; sitelinks=51; wikidata:Q652035 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 180 elements); data/traces/dumfries-q652035.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
