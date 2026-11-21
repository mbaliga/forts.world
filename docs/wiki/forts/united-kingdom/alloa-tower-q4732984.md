# Alloa Tower

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alloa-tower-q4732984` |
| Coordinates | 56.11245, -3.78831 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.11245/-3.78831)) |
| Wikidata | [Q4732984](https://www.wikidata.org/wiki/Q4732984) (CC0) |
| Wikidata class | fortification |
| Types | tower house\|country house |
| Administrative area | Clackmannanshire |
| Designations | category A listed building |
| Wikipedia language editions | 8 |
| OSM `historic` | tomb |

## What the model contains

Tier **T1**, status `outline-only`, 183 elements (outline 1, marker 3, coastline 1, road 82, building 93, zone 2, waterway 1).

Evidence: documented 0, mapped 183, inferred 0, derived 0; heights documented 0, inferred 0, unknown 93.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/92438292 historic=tomb Q17777396 246 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 244 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.11245/-3.78831) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house\|country house; sitelinks=8; wikidata:Q4732984 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 183 elements); data/traces/alloa-tower-q4732984.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
