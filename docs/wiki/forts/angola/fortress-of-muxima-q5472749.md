# Fortress of Muxima

> Angola · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortress-of-muxima-q5472749` |
| Coordinates | -9.52196, 13.95989 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-9.52196/13.95989)) |
| Wikidata | [Q5472749](https://www.wikidata.org/wiki/Q5472749) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fortress |
| Administrative area | Muxima |
| Designations | Tentative World Heritage Site\|Heritage of Portuguese Influence |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 25 elements (outline 1, marker 1, waterway 1, road 20, building 2).

Evidence: documented 0, mapped 25, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/496341442 historic=fort Q5472749 15 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid
- 26 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-9.52196/13.95989) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fortress; sitelinks=7; wikidata:Q5472749 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 25 elements); data/traces/fortress-of-muxima-q5472749.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/angola.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
