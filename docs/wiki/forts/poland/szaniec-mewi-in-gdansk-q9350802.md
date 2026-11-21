# Szaniec Mewi in Gdańsk

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `szaniec-mewi-in-gdansk-q9350802` |
| Coordinates | 54.401, 18.6832 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.401/18.6832)) |
| Wikidata | [Q9350802](https://www.wikidata.org/wiki/Q9350802) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Administrative area | Gdańsk |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 64 elements (outline 1, building 20, road 31, waterway 7, wall 2, coastline 2, water 1).

Evidence: documented 0, mapped 64, inferred 0, derived 1; heights documented 10, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/920987757 historic=fort Q9350802 32 m from ledger point
- origin moved 32 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":184,"medianInside":-2.5,"medianOutside":1.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.401/18.6832) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=2; wikidata:Q9350802 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 64 elements); data/traces/szaniec-mewi-in-gdansk-q9350802.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
