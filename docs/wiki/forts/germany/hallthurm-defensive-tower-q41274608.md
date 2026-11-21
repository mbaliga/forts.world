# Hallthurm Defensive Tower

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hallthurm-defensive-tower-q41274608` |
| Coordinates | 47.70135, 12.93373 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.70135/12.93373)) |
| Wikidata | [Q41274608](https://www.wikidata.org/wiki/Q41274608) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage ensemble |
| Administrative area | Bischofswiesen |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 50 elements (outline 1, marker 1, road 30, zone 3, building 12, waterway 1, wall 2).

Evidence: documented 0, mapped 50, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/166721295 historic=yes Q41274608 3 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.70135/12.93373) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage ensemble; sitelinks=0; wikidata:Q41274608 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 7 elements); data/traces/hallthurm-defensive-tower-q41274608.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 50 elements; outline osm:way/166721295 historic=yes Q41274608 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
