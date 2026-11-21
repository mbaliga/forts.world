# Ehemaliger Luftschutzbunker

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ehemaliger-luftschutzbunker-q20181685` |
| Coordinates | 51.1756, 6.42656 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.1756/6.42656)) |
| Wikidata | [Q20181685](https://www.wikidata.org/wiki/Q20181685) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter |
| Administrative area | Mönchengladbach |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | earthworks |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `location-only`, 299 elements (road 193, zone 26, building 1381, waterway 2, water 1).

Evidence: documented 0, mapped 299, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6865278 historic=archaeological_site 1072 m from ledger point
- site is a site relation of 18 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1780 x 298 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 1381 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 193 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.1756/6.42656) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter; sitelinks=1; wikidata:Q20181685 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 299 elements); data/traces/ehemaliger-luftschutzbunker-q20181685.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
