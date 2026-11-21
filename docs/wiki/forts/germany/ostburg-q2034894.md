# Ostburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ostburg-q2034894` |
| Coordinates | 50.1289, 11.855 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.1289/11.855)) |
| Wikidata | [Q2034894](https://www.wikidata.org/wiki/Q2034894) (CC0) |
| Wikidata class | ruin |
| Types | archaeological site\|castle ruin |
| Administrative area | Zell im Fichtelgebirge |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 49 elements (outline 1, marker 1, road 33, building 4, cliff 5, zone 5).

Evidence: documented 0, mapped 49, inferred 0, derived 0; heights documented 2, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/235198238 historic=castle Q833666 195 m from ledger point
- origin moved 191 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.1289/11.855) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; archaeological site\|castle ruin; sitelinks=2; wikidata:Q2034894 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 49 elements); data/traces/ostburg-q2034894.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
