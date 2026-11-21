# Burg Trechow

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-trechow-q1014277` |
| Coordinates | 53.8688, 11.9103 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.8688/11.9103)) |
| Wikidata | [Q1014277](https://www.wikidata.org/wiki/Q1014277) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor house |
| Administrative area | Bernitt |
| Designations | architectural heritage monument in Mecklenburg-Vorpommern |
| Wikipedia language editions | 1 |
| OSM `historic` | manor |
| OSM `website` | https://gutshaeuser.de/de/guts_herrenhaeuser/gutshaeuser_k/gutshaus_kurzen_trechow |

## What the model contains

Tier **T1**, status `outline-only`, 71 elements (outline 1, water 1, road 17, zone 5, building 47).

Evidence: documented 0, mapped 71, inferred 0, derived 0; heights documented 2, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/740780871 historic=manor Q1014277 15 m from ledger point
- origin moved 15 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.8688/11.9103) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor house; sitelinks=1; wikidata:Q1014277 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 71 elements); data/traces/burg-trechow-q1014277.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 71 elements; outline osm:way/740780871 historic=manor Q1014277 15 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
