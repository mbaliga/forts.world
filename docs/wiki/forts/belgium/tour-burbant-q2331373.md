# Tour Burbant

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-burbant-q2331373` |
| Coordinates | 50.63089, 3.77464 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.63089/3.77464)) |
| Wikidata | [Q2331373](https://www.wikidata.org/wiki/Q2331373) (CC0) |
| Wikidata class | fort |
| Types | keep\|fortified tower |
| Administrative area | Ath |
| Designations | protected heritage property in Wallonia\|Exceptional heritage property of Wallonia |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |
| OSM `website` | https://www.ath.be/loisirs/culture/musees/la-tour-burbant-voyage-au-moyen-age |

## What the model contains

Tier **T1**, status `outline+walls`, 252 elements (outline 1, marker 2, road 90, waterway 7, building 863, water 5, wall 24, zone 3).

Evidence: documented 0, mapped 252, inferred 0, derived 0; heights documented 0, inferred 0, unknown 144.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1318333394 historic=yes 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 863 mapped (trace size budget); the rest of the town is not drawn
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.63089/3.77464) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; keep\|fortified tower; sitelinks=3; wikidata:Q2331373 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 252 elements); data/traces/tour-burbant-q2331373.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
