# Kharkov Fortress

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kharkov-fortress-q37895788` |
| Coordinates | 49.98978, 36.23136 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.98978/36.23136)) |
| Wikidata | [Q37895788](https://www.wikidata.org/wiki/Q37895788) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Kharkiv |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 303 elements (outline 1, marker 21, road 330, building 89, water 2, zone 35, waterway 3, retaining-wall 1, wall 1).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 80, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1341578736 historic=yes Q4151346 162 m from ledger point
- roads capped: kept the 150 longest of 330 mapped (trace size budget); minor lanes are not drawn
- origin moved 162 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.98978/36.23136) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=2; wikidata:Q37895788 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 303 elements); data/traces/kharkov-fortress-q37895788.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
