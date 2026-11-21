# Žďár nad Sázavou

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zdar-nad-sazavou-q13423915` |
| Coordinates | 49.5637, 15.9378 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.5637/15.9378)) |
| Wikidata | [Q13423915](https://www.wikidata.org/wiki/Q13423915) (CC0) |
| Wikidata class | fort |
| Types | fortified house\|museum building |
| Administrative area | Žďár nad Sázavou 1 |
| Inception | 1500 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 345 elements (outline 1, marker 9, road 270, building 195, water 1, waterway 1, zone 59, retaining-wall 2, wall 2).

Evidence: documented 0, mapped 345, inferred 0, derived 0; heights documented 68, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/363084721 historic=monument Q38232325 226 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 195 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 270 mapped (trace size budget); minor lanes are not drawn
- origin moved 226 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.5637/15.9378) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified house\|museum building; sitelinks=2; wikidata:Q13423915 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 345 elements); data/traces/zdar-nad-sazavou-q13423915.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
