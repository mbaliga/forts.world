# Palácio do Alfeite

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-do-alfeite-q97183986` |
| Coordinates | 38.66512, -9.14734 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.66512/-9.14734)) |
| Wikidata | [Q97183986](https://www.wikidata.org/wiki/Q97183986) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Laranjeiro e Feijó |
| Designations | heritage without legal protection |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 71 elements (outline 1, coastline 1, building 31, wall 1, road 35, waterway 1, water 1).

Evidence: documented 0, mapped 71, inferred 0, derived 1; heights documented 0, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/856713716 historic=castle Q97183986 7 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":56,"medianInside":0,"medianOutside":10.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.66512/-9.14734) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=1; wikidata:Q97183986 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 71 elements); data/traces/palacio-do-alfeite-q97183986.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
