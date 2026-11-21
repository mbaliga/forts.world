# Església de Sant Antoni de Portmany

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `esglesia-de-sant-antoni-de-portmany-q56151878` |
| Coordinates | 38.98088, 1.30433 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.98088/1.30433)) |
| Wikidata | [Q56151878](https://www.wikidata.org/wiki/Q56151878) (CC0) |
| Wikidata class | castle |
| Types | church building\|castle |
| Administrative area | Sant Antoni de Portmany |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 278 elements (outline 1, marker 3, road 142, coastline 1, building 366, wall 4, retaining-wall 1, zone 1, water 5).

Evidence: documented 0, mapped 278, inferred 0, derived 1; heights documented 27, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/313255955 historic=(none; chosen by its Wikidata id) Q56151878 18 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 366 mapped (trace size budget); the rest of the town is not drawn
- origin moved 17 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":4,"medianInside":0.8,"medianOutside":8.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.98088/1.30433) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; church building\|castle; sitelinks=1; wikidata:Q56151878 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 279 elements); data/traces/esglesia-de-sant-antoni-de-portmany-q56151878.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 278 elements; outline osm:way/313255955 historic=(none; chosen by its Wikidata id) Q56151878 18 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
