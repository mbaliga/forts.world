# Aigosthena

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `aigosthena-q2827860` |
| Coordinates | 38.15166, 23.22929 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.15166/23.22929)) |
| Wikidata | [Q2827860](https://www.wikidata.org/wiki/Q2827860) (CC0) |
| Wikidata class | fort |
| Types | fortification\|polis\|archaeological site |
| Administrative area | Mandra-Eidyllia Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 12 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 46 elements (outline 1, marker 1, coastline 2, road 33, building 2, wall 5, waterway 1, water 1).

Evidence: documented 0, mapped 46, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/231043307 historic=archaeological_site Q2827860 449 m from ledger point
- origin moved 452 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":399,"medianInside":0,"medianOutside":32.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.15166/23.22929) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|polis\|archaeological site; sitelinks=12; wikidata:Q2827860 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 46 elements); data/traces/aigosthena-q2827860.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
