# Écluse du Midi - Zuidersluis

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ecluse-du-midi-zuidersluis-q42414264` |
| Coordinates | 50.84025, 4.34 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.84025/4.34)) |
| Wikidata | [Q42414264](https://www.wikidata.org/wiki/Q42414264) (CC0) |
| Wikidata class | fortification |
| Types | lock\|water gate\|discharge sluice |
| Administrative area | Brussels |
| Designations | protected monument |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 245 elements (outline 1, marker 2, road 114, building 590, water 2, waterway 2, wall 1, zone 3).

Evidence: documented 0, mapped 245, inferred 0, derived 0; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1276164916 historic=yes 372 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 590 mapped (trace size budget); the rest of the town is not drawn
- origin moved 372 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.84025/4.34) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; lock\|water gate\|discharge sluice; sitelinks=2; wikidata:Q42414264 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 245 elements); data/traces/ecluse-du-midi-zuidersluis-q42414264.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
