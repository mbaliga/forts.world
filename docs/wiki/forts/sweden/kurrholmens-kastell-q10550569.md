# Kurrholmens kastell

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kurrholmens-kastell-q10550569` |
| Coordinates | 56.14161, 15.54537 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.14161/15.54537)) |
| Wikidata | [Q10550569](https://www.wikidata.org/wiki/Q10550569) (CC0) |
| Wikidata class | fortification |
| Types | architectural ensemble\|defensive tower |
| Administrative area | Karlskrona Municipality |
| Inception | 1863 |
| Designations | governmental listed building complex |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 6 elements (outline 1, coastline 4, zone 1).

Evidence: documented 0, mapped 6, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/260036869 historic=fort Q10550569 4 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.14161/15.54537) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; architectural ensemble\|defensive tower; sitelinks=3; wikidata:Q10550569 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 6 elements); data/traces/kurrholmens-kastell-q10550569.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
