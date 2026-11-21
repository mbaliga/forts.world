# Castello Pasquini

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-pasquini-q3662353` |
| Coordinates | 43.40534, 10.41266 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.40534/10.41266)) |
| Wikidata | [Q3662353](https://www.wikidata.org/wiki/Q3662353) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Castiglioncello |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `website` | http://www.castellopasquini.it |

## What the model contains

Tier **T1**, status `outline+walls`, 160 elements (outline 1, marker 2, road 102, coastline 1, building 50, zone 2, wall 2).

Evidence: documented 0, mapped 160, inferred 0, derived 0; heights documented 2, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/120936507 historic=castle Q3662353 17 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 13 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.40534/10.41266) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q3662353 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 160 elements); data/traces/castello-pasquini-q3662353.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
