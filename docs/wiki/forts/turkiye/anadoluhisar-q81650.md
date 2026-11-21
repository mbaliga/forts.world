# Anadoluhisarı

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `anadoluhisar-q81650` |
| Coordinates | 41.08214, 29.06703 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.08214/29.06703)) |
| Wikidata | [Q81650](https://www.wikidata.org/wiki/Q81650) (CC0) |
| Wikidata class | fort |
| Types | museum\|fortification |
| Administrative area | Beykoz |
| Inception | 1393 |
| Wikipedia language editions | 33 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `description` | Anadolu Hisarı (Güzelce Hisarı olarak da bilinir), İstanbul'un Anadoluhisarı semtinde, Göksu Deresi'nin İstanbul Boğazı'na döküldüğü yerdedir. |

## What the model contains

Tier **T1**, status `outline+walls`, 325 elements (outline 1, road 54, building 254, water 2, coastline 3, waterway 1, zone 3, wall 7).

Evidence: documented 0, mapped 325, inferred 0, derived 1; heights documented 3, inferred 0, unknown 258.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13234926 historic=castle Q81650 3 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":515,"medianInside":0,"medianOutside":3.3}
- 34 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.08214/29.06703) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|fortification; sitelinks=33; wikidata:Q81650 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 325 elements); data/traces/anadoluhisar-q81650.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
