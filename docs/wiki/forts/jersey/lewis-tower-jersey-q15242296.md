# Lewis Tower, Jersey

> Jersey · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lewis-tower-jersey-q15242296` |
| Coordinates | 49.2298, -2.2346 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.2298/-2.2346)) |
| Wikidata | [Q15242296](https://www.wikidata.org/wiki/Q15242296) (CC0) |
| Wikidata class | fortification |
| Types | Martello tower |
| Wikipedia language editions | 2 |
| OSM `historic` | martello_tower |

## What the model contains

Tier **T1**, status `outline+walls`, 36 elements (outline 1, road 15, building 12, zone 2, wall 4, coastline 1, water 1).

Evidence: documented 0, mapped 36, inferred 0, derived 1; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/257002697 historic=martello_tower Q15242296 16 m from ledger point
- origin moved 16 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":185,"medianInside":0.1,"medianOutside":6.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.2298/-2.2346) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Martello tower; sitelinks=2; wikidata:Q15242296 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 36 elements); data/traces/lewis-tower-jersey-q15242296.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 36 elements; outline osm:way/257002697 historic=martello_tower Q15242296 16 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/jersey.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
