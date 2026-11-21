# Westreme Battery

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `westreme-battery-q19841018` |
| Coordinates | 35.96661, 14.35697 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.96661/14.35697)) |
| Wikidata | [Q19841018](https://www.wikidata.org/wiki/Q19841018) (CC0) |
| Wikidata class | fortification |
| Types | museum\|artillery battery |
| Administrative area | Mellieħa |
| Inception | 1715 |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 189 elements (outline 1, road 20, coastline 1, wall 6, retaining-wall 58, zone 5, building 94, water 4).

Evidence: documented 0, mapped 189, inferred 0, derived 1; heights documented 9, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/422233970 historic=(none; chosen by its Wikidata id) Q19841018 2 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":187,"medianInside":0,"medianOutside":9.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.96661/14.35697) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; museum\|artillery battery; sitelinks=3; wikidata:Q19841018 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 189 elements); data/traces/westreme-battery-q19841018.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 189 elements; outline osm:way/422233970 historic=(none; chosen by its Wikidata id) Q19841018 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
