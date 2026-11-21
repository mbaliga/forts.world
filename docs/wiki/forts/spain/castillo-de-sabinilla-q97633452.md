# Castillo de Sabinilla

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-sabinilla-q97633452` |
| Coordinates | 36.35147, -5.23327 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.35147/-5.23327)) |
| Wikidata | [Q97633452](https://www.wikidata.org/wiki/Q97633452) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|no\|castle\|archaeological site |
| Administrative area | Manilva |
| Designations | bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | no |
| OSM `website` | https://manilva.es/monumentos/ |

## What the model contains

Tier **T1**, status `outline+walls`, 91 elements (outline 1, road 69, building 12, wall 3, zone 1, waterway 2, coastline 1, water 2).

Evidence: documented 0, mapped 91, inferred 0, derived 2; heights documented 1, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7946319 historic=castle Q97633452 7 m from ledger point
- origin moved 9 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":46,"medianInside":0,"medianOutside":6.3}
- sea-1: DEM check ok {"cells":10,"medianInside":0,"medianOutside":5.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.35147/-5.23327) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|no\|castle\|archaeological site; sitelinks=2; wikidata:Q97633452 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 91 elements); data/traces/castillo-de-sabinilla-q97633452.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
