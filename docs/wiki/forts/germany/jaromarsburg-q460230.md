# Jaromarsburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jaromarsburg-q460230` |
| Coordinates | 54.67696, 13.436 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.67696/13.436)) |
| Wikidata | [Q460230](https://www.wikidata.org/wiki/Q460230) (CC0) |
| Wikidata class | fort |
| Types | temple\|hillfort |
| Administrative area | Putgarten |
| Wikipedia language editions | 11 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |

## What the model contains

Tier **T1**, status `outline-only`, 42 elements (outline 1, road 28, coastline 2, building 4, zone 5, cliff 1, water 1).

Evidence: documented 0, mapped 42, inferred 0, derived 1; heights documented 1, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/31172718 historic=archaeological_site Q460230 65 m from ledger point
- origin moved 67 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":336,"medianInside":2.5,"medianOutside":28.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.67696/13.436) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; temple\|hillfort; sitelinks=11; wikidata:Q460230 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 42 elements); data/traces/jaromarsburg-q460230.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
