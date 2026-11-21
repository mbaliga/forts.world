# monastery of Comburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `monastery-of-comburg-q561890` |
| Coordinates | 49.10001, 9.74994 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.10001/9.74994)) |
| Wikidata | [Q561890](https://www.wikidata.org/wiki/Q561890) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|monastery\|abbey\|religious community |
| Administrative area | Schwäbisch Hall |
| Inception | 1001 |
| Designations | cultural heritage monument in Baden-Württemberg |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | yes |
| OSM `website` | https://www.kloster-grosscomburg.de/start/ |

## What the model contains

Tier **T1**, status `outline+walls`, 338 elements (outline 1, marker 3, road 228, waterway 8, building 201, zone 30, wall 14, retaining-wall 12).

Evidence: documented 0, mapped 338, inferred 0, derived 0; heights documented 36, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/35417071 historic=castle Q561890 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 201 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 228 mapped (trace size budget); minor lanes are not drawn
- origin moved 8 m from the ledger point to the outline centroid
- 36 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.10001/9.74994) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|monastery\|abbey\|religious community; sitelinks=11; wikidata:Q561890 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 338 elements); data/traces/monastery-of-comburg-q561890.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
