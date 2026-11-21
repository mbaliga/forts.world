# Bigalı Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bigal-castle-q6005930` |
| Coordinates | 40.2134, 26.38926 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.2134/26.38926)) |
| Wikidata | [Q6005930](https://www.wikidata.org/wiki/Q6005930) (CC0) |
| Wikidata class | ruin |
| Types | building\|fortress\|castle ruin |
| Administrative area | Çanakkale Province |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 9 elements (outline 1, road 6, coastline 1, water 1).

Evidence: documented 0, mapped 9, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/859777384 historic=archaeological_site 10 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":156,"medianInside":0,"medianOutside":8.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.2134/26.38926) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; building\|fortress\|castle ruin; sitelinks=1; wikidata:Q6005930 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 9 elements); data/traces/bigal-castle-q6005930.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
