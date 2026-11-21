# Stockholm Palace

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stockholm-palace-q750444` |
| Coordinates | 59.32694, 18.07163 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.32694/18.07163)) |
| Wikidata | [Q750444](https://www.wikidata.org/wiki/Q750444) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|museum\|cultural property\|royal palace\|architectural ensemble |
| Administrative area | Stockholm Municipality |
| Inception | 1760 |
| Designations | governmental listed building complex |
| Wikipedia language editions | 45 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |
| OSM `description` | Official residence of the Swedish monarch. Baraque-styel, Main cortyard and several mseums are open to the public. |
| OSM `website` | https://www.kungligaslotten.se |

## What the model contains

Tier **T1**, status `outline+walls`, 338 elements (outline 1, marker 9, road 449, building 230, coastline 15, waterway 3, wall 17, retaining-wall 12, water 2, zone 9).

Evidence: documented 0, mapped 338, inferred 0, derived 1; heights documented 86, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/34394 historic=castle Q750444 16 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 230 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 449 mapped (trace size budget); minor lanes are not drawn
- origin moved 19 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":168,"medianInside":9.5,"medianOutside":20.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.32694/18.07163) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|museum\|cultural property\|royal palace\|architectural ensemble; sitelinks=45; wikidata:Q750444 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 338 elements); data/traces/stockholm-palace-q750444.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
