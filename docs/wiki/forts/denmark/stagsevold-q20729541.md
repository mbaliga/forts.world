# Stagsevold

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stagsevold-q20729541` |
| Coordinates | 55.67918, 9.84676 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.67918/9.84676)) |
| Wikidata | [Q20729541](https://www.wikidata.org/wiki/Q20729541) (CC0) |
| Wikidata class | fort |
| Types | hillfort |
| Administrative area | Hedensted Municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `description` | Voldanlæg fra 1400-tallet |

## What the model contains

Tier **T1**, status `outline-only`, 25 elements (outline 1, road 10, zone 3, coastline 1, waterway 10).

Evidence: documented 0, mapped 25, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/358102786 historic=archaeological_site Q20729541 5 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.67918/9.84676) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort; sitelinks=2; wikidata:Q20729541 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 25 elements); data/traces/stagsevold-q20729541.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
