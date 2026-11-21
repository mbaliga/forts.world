# Fort du Mont-Dauphin

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-du-mont-dauphin-q22998467` |
| Coordinates | 44.6697, 6.6241 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.6697/6.6241)) |
| Wikidata | [Q22998467](https://www.wikidata.org/wiki/Q22998467) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Mont-Dauphin |
| Designations | part of UNESCO World Heritage Site\|classified historical monument |
| UNESCO WHC id | 1283-007 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `location-only`, 296 elements (marker 5, road 212, building 166, zone 29, wall 52, cliff 10, retaining-wall 34, waterway 26).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 22, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1640585 historic=castle Q22998467 72 m from ledger point
- site is a site relation of 24 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (585 x 654 m)
- present-day buildings capped: kept the 60 nearest the outline centre of 166 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 212 mapped (trace size budget); minor lanes are not drawn
- origin moved 82 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.6697/6.6241) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q22998467 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 296 elements); data/traces/fort-du-mont-dauphin-q22998467.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
