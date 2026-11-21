# Donjon de Clermont

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `donjon-de-clermont-q1888191` |
| Coordinates | 49.3799, 2.41918 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.3799/2.41918)) |
| Wikidata | [Q1888191](https://www.wikidata.org/wiki/Q1888191) (CC0) |
| Wikidata class | fortification |
| Types | keep |
| Administrative area | Clermont |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 365 elements (outline 1, marker 2, road 143, zone 22, building 209, retaining-wall 9, wall 68).

Evidence: documented 0, mapped 365, inferred 0, derived 0; heights documented 1, inferred 0, unknown 196.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/89489144 historic=ruins Q1888191 65 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 209 mapped (trace size budget); the rest of the town is not drawn
- origin moved 65 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.3799/2.41918) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; keep; sitelinks=3; wikidata:Q1888191 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 365 elements); data/traces/donjon-de-clermont-q1888191.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
