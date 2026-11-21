# Sigri Castle

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sigri-castle-q38282761` |
| Coordinates | 39.21089, 25.85057 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.21089/25.85057)) |
| Wikidata | [Q38282761](https://www.wikidata.org/wiki/Q38282761) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | West Lesvos Municipality |
| Designations | protected building in Greece\|archaeological site in Greece |
| Wikipedia language editions | 1 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 129 elements (outline 1, marker 2, coastline 2, road 40, building 77, cliff 1, wall 1, zone 1, retaining-wall 3, water 1).

Evidence: documented 0, mapped 129, inferred 0, derived 1; heights documented 0, inferred 0, unknown 81.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/453735752 historic=monument 50 m from ledger point
- origin moved 50 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":229,"medianInside":0,"medianOutside":5.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.21089/25.85057) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q38282761 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 129 elements); data/traces/sigri-castle-q38282761.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
