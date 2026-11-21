# Fortifications of Champdieu

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-of-champdieu-q22967178` |
| Coordinates | 45.6451, 4.0453 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.6451/4.0453)) |
| Wikidata | [Q22967178](https://www.wikidata.org/wiki/Q22967178) (CC0) |
| Wikidata class | fort |
| Types | compound (fortification) |
| Administrative area | Champdieu |
| Designations | classified historical monument |
| Wikipedia language editions | 0 |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 202 elements (outline 1, marker 4, road 73, zone 2, building 477, waterway 1, wall 1).

Evidence: documented 0, mapped 202, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/410936656 historic=(none; chosen by its Wikidata id) Q22967178 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 477 mapped (trace size budget); the rest of the town is not drawn
- origin moved 9 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.6451/4.0453) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; compound (fortification); sitelinks=0; wikidata:Q22967178 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 200 elements); data/traces/fortifications-of-champdieu-q22967178.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 202 elements; outline osm:way/410936656 historic=(none; chosen by its Wikidata id) Q22967178 10 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
