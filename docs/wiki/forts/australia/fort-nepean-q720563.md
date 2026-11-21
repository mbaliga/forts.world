# Fort Nepean

> Australia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-nepean-q720563` |
| Coordinates | -38.303, 144.6524 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-38.303/144.6524)) |
| Wikidata | [Q720563](https://www.wikidata.org/wiki/Q720563) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Victoria |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 36 elements (outline 1, marker 2, coastline 2, road 22, zone 5, building 2, retaining-wall 1, water 1).

Evidence: documented 0, mapped 36, inferred 0, derived 1; heights documented 1, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1127659393 historic=castle Q720563 47 m from ledger point
- origin moved 49 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":252,"medianInside":4,"medianOutside":12.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-38.303/144.6524) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q720563 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 36 elements); data/traces/fort-nepean-q720563.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/australia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
