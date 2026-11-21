# Al Faihani Palace

> Saudi Arabia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `al-faihani-palace-q12233039` |
| Coordinates | 26.54363, 50.07712 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.54363/50.07712)) |
| Wikidata | [Q12233039](https://www.wikidata.org/wiki/Q12233039) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|palace |
| Administrative area | Qatif governorate |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 199 elements (outline 1, coastline 2, road 35, zone 7, building 152, water 2).

Evidence: documented 0, mapped 199, inferred 0, derived 2; heights documented 0, inferred 0, unknown 152.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1138189739 historic=castle Q12233039 2 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":28,"medianInside":2,"medianOutside":7.8}
- sea-1: DEM check ok {"cells":1,"medianInside":0.9,"medianOutside":7.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.54363/50.07712) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|palace; sitelinks=3; wikidata:Q12233039 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 199 elements); data/traces/al-faihani-palace-q12233039.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/saudi-arabia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
