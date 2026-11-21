# Stegehus

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stegehus-q21994321` |
| Coordinates | 54.9823, 12.2841 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.9823/12.2841)) |
| Wikidata | [Q21994321](https://www.wikidata.org/wiki/Q21994321) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Vordingborg Municipality |
| Inception | 1300 |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 261 elements (outline 1, road 71, coastline 2, building 184, wall 1, zone 2).

Evidence: documented 0, mapped 261, inferred 0, derived 0; heights documented 24, inferred 0, unknown 161.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/377024578 historic=yes Q16324175 637 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 637 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.9823/12.2841) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=2; wikidata:Q21994321 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 261 elements); data/traces/stegehus-q21994321.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
