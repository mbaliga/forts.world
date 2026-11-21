# Hereke Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hereke-castle-q106858944` |
| Coordinates | 40.78424, 29.61287 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.78424/29.61287)) |
| Wikidata | [Q106858944](https://www.wikidata.org/wiki/Q106858944) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress |
| Administrative area | Körfez |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `description` | Hereke Kalesi, Kocaeli'nin Körfez ilçesinde bulunan, 640'lı yıllarda Roma İmparatorluğu döneminde yapıldığı tahmin edilen bir kaledir.İzmit'in fethi sırasında İzmit'ten kaçanlar Hereke Kalesi'ne sığınır ve durumu öğrenen Orhan Gazi, Ali Bey'i başbuğ olara |
| OSM `website` | https://herekeli.com/hereke/ |

## What the model contains

Tier **T1**, status `outline+walls`, 236 elements (outline 1, road 65, coastline 1, building 141, wall 8, retaining-wall 4, zone 9, cliff 1, waterway 4, water 2).

Evidence: documented 0, mapped 236, inferred 0, derived 2; heights documented 4, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1291245620 historic=fort Q106858944 14 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":12,"medianInside":0.1,"medianOutside":18}
- sea-1: DEM check ok {"cells":1,"medianInside":2.4,"medianOutside":17.7}
- 18 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.78424/29.61287) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress; sitelinks=2; wikidata:Q106858944 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 236 elements); data/traces/hereke-castle-q106858944.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
