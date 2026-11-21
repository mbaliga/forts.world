# Fort Henry

> Jersey · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-henry-q52063050` |
| Coordinates | 49.1859, -2.0345 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.1859/-2.0345)) |
| Wikidata | [Q52063050](https://www.wikidata.org/wiki/Q52063050) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Grouville |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 48 elements (outline 1, marker 1, road 18, building 24, water 2, wall 1, coastline 1).

Evidence: documented 0, mapped 48, inferred 0, derived 1; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/168434377 historic=(none; chosen by its Wikidata id) Q52063050 8 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":119,"medianInside":0,"medianOutside":7.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.1859/-2.0345) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=2; wikidata:Q52063050 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 46 elements); data/traces/fort-henry-q52063050.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 48 elements; outline osm:way/168434377 historic=(none; chosen by its Wikidata id) Q52063050 8 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/jersey.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
