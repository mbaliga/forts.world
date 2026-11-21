# Dicker Turm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dicker-turm-q41382848` |
| Coordinates | 49.72385, 10.00245 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.72385/10.00245)) |
| Wikidata | [Q41382848](https://www.wikidata.org/wiki/Q41382848) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Eibelstadt |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | tower |

## What the model contains

Tier **T1**, status `outline+walls`, 222 elements (outline 1, marker 11, road 72, waterway 1, zone 6, wall 11, building 388).

Evidence: documented 0, mapped 222, inferred 0, derived 0; heights documented 2, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/384305108 historic=tower Q41382848 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 388 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.72385/10.00245) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q41382848 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 222 elements); data/traces/dicker-turm-q41382848.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 222 elements; outline osm:way/384305108 historic=tower Q41382848 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
