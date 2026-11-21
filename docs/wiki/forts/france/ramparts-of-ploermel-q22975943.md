# Ramparts of Ploërmel

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ramparts-of-ploermel-q22975943` |
| Coordinates | 47.93333, -2.39694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.93333/-2.39694)) |
| Wikidata | [Q22975943](https://www.wikidata.org/wiki/Q22975943) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Ploërmel |
| Inception | 1150 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 283 elements (outline 1, marker 3, road 172, building 372, water 1, zone 5, wall 3).

Evidence: documented 0, mapped 283, inferred 0, derived 0; heights documented 8, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/147931679 historic=building Q22992076 150 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 372 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 172 mapped (trace size budget); minor lanes are not drawn
- origin moved 150 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.93333/-2.39694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q22975943 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 283 elements); data/traces/ramparts-of-ploermel-q22975943.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
