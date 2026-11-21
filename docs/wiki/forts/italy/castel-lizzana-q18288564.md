# Castel Lizzana

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castel-lizzana-q18288564` |
| Coordinates | 45.8716, 11.03514 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.8716/11.03514)) |
| Wikidata | [Q18288564](https://www.wikidata.org/wiki/Q18288564) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Rovereto |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `location-only`, 334 elements (marker 7, road 196, zone 29, building 315, wall 15, cliff 7, retaining-wall 6).

Evidence: documented 0, mapped 334, inferred 0, derived 0; heights documented 0, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15479163 historic=yes Q55340808 1387 m from ledger point
- site is a route relation of 8 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (523 x 2227 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 315 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 196 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.8716/11.03514) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=2; wikidata:Q18288564 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 334 elements); data/traces/castel-lizzana-q18288564.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
