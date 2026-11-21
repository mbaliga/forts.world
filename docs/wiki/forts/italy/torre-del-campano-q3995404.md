# Torre del Campano

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-campano-q3995404` |
| Coordinates | 43.71757, 10.40051 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.71757/10.40051)) |
| Wikidata | [Q3995404](https://www.wikidata.org/wiki/Q3995404) (CC0) |
| Wikidata class | fortification |
| Types | tower house\|bell tower |
| Administrative area | Pisa |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 56 elements (outline 1, marker 8, road 195, water 1, building 215, wall 32, zone 12, waterway 3, retaining-wall 1).

Evidence: documented 0, mapped 56, inferred 0, derived 0; heights documented 2, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/237457947 historic=(none; chosen by its Wikidata id) Q3995404 1 m from ledger point
- pruned to the outline plus 60 m: 468 -> 57 elements
- present-day buildings capped: kept the 30 nearest the outline centre of 31 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.71757/10.40051) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house\|bell tower; sitelinks=3; wikidata:Q3995404 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 362 elements); data/traces/torre-del-campano-q3995404.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 56 elements; outline osm:way/237457947 historic=(none; chosen by its Wikidata id) Q3995404 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
