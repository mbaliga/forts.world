# hôtel de ville de Champlitte

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hotel-de-ville-de-champlitte-q15950769` |
| Coordinates | 47.61687, 5.51414 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.61687/5.51414)) |
| Wikidata | [Q15950769](https://www.wikidata.org/wiki/Q15950769) (CC0) |
| Wikidata class | castle |
| Types | castle\|facility |
| Administrative area | Champlitte |
| Designations | classified historical monument |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 209 elements (outline 1, marker 2, road 64, waterway 3, building 498, zone 17, wall 2).

Evidence: documented 0, mapped 209, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/87526037 historic=castle Q15950769 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 498 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.61687/5.51414) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|facility; sitelinks=1; wikidata:Q15950769 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 209 elements); data/traces/hotel-de-ville-de-champlitte-q15950769.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
