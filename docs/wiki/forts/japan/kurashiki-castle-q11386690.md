# Kurashiki Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kurashiki-castle-q11386690` |
| Coordinates | 34.59519, 133.77306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.59519/133.77306)) |
| Wikidata | [Q11386690](https://www.wikidata.org/wiki/Q11386690) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `description` | 2016(平成28)年に営業を停止し、現在は大原美術館所有になっています。 |
| OSM `website` | https://www.city.kurashiki.okayama.jp/5592.htm |

## What the model contains

Tier **T1**, status `outline+walls`, 327 elements (outline 1, marker 3, road 154, building 384, water 3, zone 4, wall 40, waterway 1, retaining-wall 5).

Evidence: documented 0, mapped 327, inferred 0, derived 0; heights documented 5, inferred 0, unknown 160.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/332084932 historic=building 224 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 384 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 154 mapped (trace size budget); minor lanes are not drawn
- origin moved 226 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.59519/133.77306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=1; wikidata:Q11386690 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 327 elements); data/traces/kurashiki-castle-q11386690.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
