# Ravnsborg

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ravnsborg-q12333000` |
| Coordinates | 54.89637, 11.3613 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.89637/11.3613)) |
| Wikidata | [Q12333000](https://www.wikidata.org/wiki/Q12333000) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Lolland Municipality |
| Inception | 1330 |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 25 elements (outline 1, coastline 1, road 6, waterway 5, zone 8, building 3, water 1).

Evidence: documented 0, mapped 25, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/619860947 historic=archaeological_site Q12333000 6 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":175,"medianInside":1,"medianOutside":1.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.89637/11.3613) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=3; wikidata:Q12333000 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 25 elements); data/traces/ravnsborg-q12333000.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
