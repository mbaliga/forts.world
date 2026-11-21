# Runkelstein Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `runkelstein-castle-q376571` |
| Coordinates | 46.51748, 11.35899 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.51748/11.35899)) |
| Wikidata | [Q376571](https://www.wikidata.org/wiki/Q376571) (CC0) |
| Wikidata class | castle |
| Types | castle\|private museum\|historical park museum\|military museum building |
| Administrative area | Ritten |
| Inception | 1237 |
| Designations | Italian national heritage\|cultural heritage monument in South Tyrol |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.runkelstein.info/ |

## What the model contains

Tier **T1**, status `outline+walls`, 49 elements (outline 1, road 25, building 13, wall 2, zone 7, waterway 1).

Evidence: documented 0, mapped 49, inferred 0, derived 0; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/221552585 historic=castle Q376571 13 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.51748/11.35899) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|private museum\|historical park museum\|military museum building; sitelinks=9; wikidata:Q376571 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 49 elements); data/traces/runkelstein-castle-q376571.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
