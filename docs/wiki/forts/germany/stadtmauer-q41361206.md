# Stadtmauer

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-q41361206` |
| Coordinates | 49.11333, 10.75468 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.11333/10.75468)) |
| Wikidata | [Q41361206](https://www.wikidata.org/wiki/Q41361206) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Gunzenhausen |
| Designations | former architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | building |
| OSM `description` | ab 1883 jüdisches Ritualbad "Mikwe" |

## What the model contains

Tier **T1**, status `outline+walls`, 244 elements (outline 1, marker 2, road 115, waterway 1, building 310, wall 4, retaining-wall 1).

Evidence: documented 0, mapped 244, inferred 0, derived 0; heights documented 1, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/237669221 historic=building 133 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 310 mapped (trace size budget); the rest of the town is not drawn
- origin moved 133 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.11333/10.75468) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q41361206 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 244 elements); data/traces/stadtmauer-q41361206.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
