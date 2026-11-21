# Castell de Calafell

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-de-calafell-q11913016` |
| Coordinates | 41.2017, 1.56857 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.2017/1.56857)) |
| Wikidata | [Q11913016](https://www.wikidata.org/wiki/Q11913016) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Calafell |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 8 |
| OSM `description` | Castillo documentado desde 1037, sobre un cerro ocupado desde época ibérica y romana. Reformado por los Palou como palacio gótico, fue parcialmente destruido durante la Guerra dels Segadors y utilizado como cementerio hasta 1938. |
| OSM `ruins` | yes |
| OSM `website` | https://calafell.cat/sites/default/files/poum/APOUM/08/catalergsmasies.pdf |

## What the model contains

Tier **T1**, status `outline+walls`, 304 elements (outline 1, marker 19, road 352, building 157, zone 36, wall 104, retaining-wall 18, waterway 1).

Evidence: documented 0, mapped 304, inferred 0, derived 0; heights documented 0, inferred 0, unknown 173.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/245891813 historic=castle Q11913016 28 m from ledger point
- pruned to the outline plus 150 m: 688 -> 557 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 138 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 255 mapped (trace size budget); minor lanes are not drawn
- origin moved 28 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.2017/1.56857) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q11913016 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 304 elements); data/traces/castell-de-calafell-q11913016.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
