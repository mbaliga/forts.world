# Goryōkaku

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `goryokaku-q1196357` |
| Coordinates | 41.79694, 140.75694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.79694/140.75694)) |
| Wikidata | [Q1196357](https://www.wikidata.org/wiki/Q1196357) (CC0) |
| Wikidata class | ruin |
| Types | fortress\|star fort\|park\|castle ruin in Japan |
| Administrative area | Hakodate |
| Inception | 1866 |
| Designations | Special Historic Site\|Hokkaido Heritage\|Historic Site of Japan |
| Wikipedia language editions | 26 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 318 elements (outline 1, marker 6, road 195, waterway 2, retaining-wall 22, building 699, water 12, zone 4, wall 1).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 2, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/180806137 historic=fort Q1196357 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 699 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 195 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.79694/140.75694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; fortress\|star fort\|park\|castle ruin in Japan; sitelinks=26; wikidata:Q1196357 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 318 elements); data/traces/goryokaku-q1196357.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
