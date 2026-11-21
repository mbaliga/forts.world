# Torre de Cala Pi

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-cala-pi-q18008397` |
| Coordinates | 39.3615, 2.83528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.3615/2.83528)) |
| Wikidata | [Q18008397](https://www.wikidata.org/wiki/Q18008397) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Llucmajor |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 47 elements (outline 1, road 18, coastline 1, cliff 1, building 22, wall 1, water 3).

Evidence: documented 0, mapped 47, inferred 0, derived 2; heights documented 0, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/208215601 historic=(none; chosen by its Wikidata id) Q18008397 1 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":320,"medianInside":0,"medianOutside":17.4}
- sea-1: DEM check ok {"cells":317,"medianInside":0,"medianOutside":13.4}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.3615/2.83528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=4; wikidata:Q18008397 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 47 elements); data/traces/torre-de-cala-pi-q18008397.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 47 elements; outline osm:way/208215601 historic=(none; chosen by its Wikidata id) Q18008397 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
