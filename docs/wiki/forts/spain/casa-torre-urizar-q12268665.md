# Casa-torre Urízar

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casa-torre-urizar-q12268665` |
| Coordinates | 43.25111, -2.93518 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.25111/-2.93518)) |
| Wikidata | [Q12268665](https://www.wikidata.org/wiki/Q12268665) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Bilbao |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 208 elements (outline 1, road 158, building 30, zone 18, wall 1).

Evidence: documented 0, mapped 208, inferred 0, derived 0; heights documented 1, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/302250572 historic=(none; chosen by its Wikidata id) Q12268665 4 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.25111/-2.93518) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=1; wikidata:Q12268665 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 207 elements); data/traces/casa-torre-urizar-q12268665.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 208 elements; outline osm:way/302250572 historic=(none; chosen by its Wikidata id) Q12268665 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
