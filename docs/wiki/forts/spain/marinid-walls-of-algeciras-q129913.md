# Marinid Walls of Algeciras

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `marinid-walls-of-algeciras-q129913` |
| Coordinates | 36.1339, -5.44725 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.1339/-5.44725)) |
| Wikidata | [Q129913](https://www.wikidata.org/wiki/Q129913) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Algeciras |
| Designations | bien de interés cultural |
| Wikipedia language editions | 5 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 290 elements (outline 1, road 137, zone 6, coastline 1, building 144, wall 1).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 18, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/262672813 historic=archaeological_site Q129913 18 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 15 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.1339/-5.44725) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=5; wikidata:Q129913 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 290 elements); data/traces/marinid-walls-of-algeciras-q129913.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
