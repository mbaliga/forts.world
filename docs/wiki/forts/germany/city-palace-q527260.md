# City Palace

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-palace-q527260` |
| Coordinates | 52.39499, 13.06048 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.39499/13.06048)) |
| Wikidata | [Q527260](https://www.wikidata.org/wiki/Q527260) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace\|parliament building\|destroyed building or structure |
| Administrative area | Potsdam |
| Inception | 1662 |
| Wikipedia language editions | 21 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.landtag.brandenburg.de/de/landtag_kennenlernen/besucherdienst/ueber_das_landtagsgebaeude/25362 |

## What the model contains

Tier **T1**, status `outline+walls`, 310 elements (outline 1, marker 8, road 313, water 2, wall 13, building 102, waterway 2, zone 28, retaining-wall 4).

Evidence: documented 0, mapped 310, inferred 0, derived 0; heights documented 88, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3297507 historic=castle Q527260 31 m from ledger point
- roads capped: kept the 150 longest of 313 mapped (trace size budget); minor lanes are not drawn
- origin moved 25 m from the ledger point to the outline centroid
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.39499/13.06048) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace\|parliament building\|destroyed building or structure; sitelinks=21; wikidata:Q527260 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 310 elements); data/traces/city-palace-q527260.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
