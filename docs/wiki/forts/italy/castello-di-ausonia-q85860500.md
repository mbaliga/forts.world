# Castello di Ausonia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-ausonia-q85860500` |
| Coordinates | 41.35514, 13.74909 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.35514/13.74909)) |
| Wikidata | [Q85860500](https://www.wikidata.org/wiki/Q85860500) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Ausonia |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 246 elements (outline 1, marker 2, road 338, building 52, zone 5, retaining-wall 28, wall 8).

Evidence: documented 0, mapped 246, inferred 0, derived 0; heights documented 0, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2301267 historic=archaeological_site 48 m from ledger point
- roads capped: kept the 150 longest of 338 mapped (trace size budget); minor lanes are not drawn
- origin moved 48 m from the ledger point to the centre of the mapped site
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.35514/13.74909) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q85860500 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 246 elements); data/traces/castello-di-ausonia-q85860500.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
