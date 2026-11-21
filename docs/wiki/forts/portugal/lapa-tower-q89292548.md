# Lapa Tower

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lapa-tower-q89292548` |
| Coordinates | 37.1008, -8.5025 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.1008/-8.5025)) |
| Wikidata | [Q89292548](https://www.wikidata.org/wiki/Q89292548) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage\|watchtower |
| Administrative area | Ferragudo |
| Designations | Monument of Public Interest |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 40 elements (outline 1, road 32, coastline 2, building 1, cliff 1, zone 2, water 1).

Evidence: documented 0, mapped 40, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1026625146 historic=archaeological_site Q89292548 2 m from ledger point
- island ring (1274 m2) cut out of sea-0
- origin moved 1 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":189,"medianInside":0,"medianOutside":39.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.1008/-8.5025) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage\|watchtower; sitelinks=2; wikidata:Q89292548 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 40 elements); data/traces/lapa-tower-q89292548.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
