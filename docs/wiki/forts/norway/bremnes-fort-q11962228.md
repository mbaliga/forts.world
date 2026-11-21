# Bremnes Fort

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bremnes-fort-q11962228` |
| Coordinates | 67.32167, 14.45955 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/67.32167/14.45955)) |
| Wikidata | [Q11962228](https://www.wikidata.org/wiki/Q11962228) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Bodø Municipality |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 122 elements (outline 1, marker 1, road 42, building 69, coastline 2, cliff 3, wall 1, water 3).

Evidence: documented 0, mapped 122, inferred 0, derived 3; heights documented 2, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/661009937 historic=(none; chosen by its Wikidata id) Q11962228 90 m from ledger point
- origin moved 89 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":21,"medianInside":0,"medianOutside":17.1}
- sea-1: DEM check ok {"cells":16,"medianInside":0,"medianOutside":16.9}
- sea-2: DEM check ok {"cells":6,"medianInside":0,"medianOutside":16.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/67.32167/14.45955) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q11962228 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 90 elements); data/traces/bremnes-fort-q11962228.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 122 elements; outline osm:way/661009937 historic=(none; chosen by its Wikidata id) Q11962228 90 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
