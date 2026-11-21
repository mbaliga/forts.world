# 12 Piłsudskiego Street in Radom

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `12-pi-sudskiego-street-in-radom-q24947363` |
| Coordinates | 51.39907, 21.15349 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.39907/21.15349)) |
| Wikidata | [Q24947363](https://www.wikidata.org/wiki/Q24947363) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|building |
| Administrative area | Radom |
| Designations | cultural property protection in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.mbpradom.pl/ |

## What the model contains

Tier **T1**, status `outline+walls`, 283 elements (outline 1, marker 12, road 307, building 258, zone 151, wall 36).

Evidence: documented 0, mapped 283, inferred 0, derived 0; heights documented 59, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/308038248 historic=castle Q24947363 5 m from ledger point
- pruned to the outline plus 150 m: 765 -> 493 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 159 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 191 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.39907/21.15349) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|building; sitelinks=3; wikidata:Q24947363 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 283 elements); data/traces/12-pi-sudskiego-street-in-radom-q24947363.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
