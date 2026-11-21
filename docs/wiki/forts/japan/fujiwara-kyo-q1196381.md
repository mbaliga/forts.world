# Fujiwara-kyō

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fujiwara-kyo-q1196381` |
| Coordinates | 34.50222, 135.80722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.50222/135.80722)) |
| Wikidata | [Q1196381](https://www.wikidata.org/wiki/Q1196381) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|capital city wall\|capital of Japan |
| Administrative area | Yamato Province |
| Inception | 0694 |
| Wikipedia language editions | 25 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 180 elements (outline 1, marker 3, road 90, waterway 25, zone 37, water 3, building 21).

Evidence: documented 0, mapped 180, inferred 0, derived 0; heights documented 0, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/426531398 historic=archaeological_site 106 m from ledger point
- origin moved 103 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.50222/135.80722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|capital city wall\|capital of Japan; sitelinks=25; wikidata:Q1196381 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 180 elements); data/traces/fujiwara-kyo-q1196381.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
