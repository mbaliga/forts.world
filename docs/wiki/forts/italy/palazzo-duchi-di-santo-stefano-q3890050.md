# Palazzo Duchi di Santo Stefano

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-duchi-di-santo-stefano-q3890050` |
| Coordinates | 37.85085, 15.28171 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.85085/15.28171)) |
| Wikidata | [Q3890050](https://www.wikidata.org/wiki/Q3890050) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Taormina |
| Inception | 1981 |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 394 elements (outline 1, marker 4, waterway 1, road 165, building 199, zone 2, coastline 1, retaining-wall 9, wall 9, cliff 2, water 1).

Evidence: documented 0, mapped 394, inferred 0, derived 0; heights documented 1, inferred 0, unknown 216.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1395470273 historic=castle Q3890050 3 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.85085/15.28171) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=4; wikidata:Q3890050 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 394 elements); data/traces/palazzo-duchi-di-santo-stefano-q3890050.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
