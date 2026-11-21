# Torreón de la Olvera

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torreon-de-la-olvera-q98057746` |
| Coordinates | 36.75037, -3.01431 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.75037/-3.01431)) |
| Wikidata | [Q98057746](https://www.wikidata.org/wiki/Q98057746) (CC0) |
| Wikidata class | fortification |
| Types | tower\|defensive wall |
| Administrative area | Adra |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 243 elements (outline 1, coastline 1, road 102, building 438, wall 16, zone 3).

Evidence: documented 0, mapped 243, inferred 0, derived 0; heights documented 0, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1380049206 historic=archaeological_site 338 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 438 mapped (trace size budget); the rest of the town is not drawn
- origin moved 337 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.75037/-3.01431) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|defensive wall; sitelinks=1; wikidata:Q98057746 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 243 elements); data/traces/torreon-de-la-olvera-q98057746.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
