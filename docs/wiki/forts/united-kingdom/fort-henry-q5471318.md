# Fort Henry

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-henry-q5471318` |
| Coordinates | 50.6452, -1.94785 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.6452/-1.94785)) |
| Wikidata | [Q5471318](https://www.wikidata.org/wiki/Q5471318) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Studland |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 117 elements (outline 1, marker 1, road 79, coastline 1, building 20, zone 9, cliff 1, wall 4, water 1).

Evidence: documented 0, mapped 117, inferred 0, derived 1; heights documented 0, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/194785041 historic=(none; chosen by its Wikidata id) Q5471318 2 m from ledger point
- sea-0: DEM check ok {"cells":153,"medianInside":-0.4,"medianOutside":17.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.6452/-1.94785) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=2; wikidata:Q5471318 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 117 elements); data/traces/fort-henry-q5471318.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 117 elements; outline osm:way/194785041 historic=(none; chosen by its Wikidata id) Q5471318 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
