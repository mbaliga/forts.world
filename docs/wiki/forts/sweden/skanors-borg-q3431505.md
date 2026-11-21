# Skanörs borg

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `skanors-borg-q3431505` |
| Coordinates | 55.4207, 12.8493 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.4207/12.8493)) |
| Wikidata | [Q3431505](https://www.wikidata.org/wiki/Q3431505) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Vellinge Municipality |
| Designations | monument in Fornminnesregistret |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 81 elements (outline 1, road 32, building 40, waterway 1, water 2, zone 4, coastline 1).

Evidence: documented 0, mapped 81, inferred 0, derived 0; heights documented 0, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28500558 historic=ruins Q3431505 13 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.4207/12.8493) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q3431505 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 81 elements); data/traces/skanors-borg-q3431505.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
