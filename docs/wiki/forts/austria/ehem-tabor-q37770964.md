# Ehem. Tabor

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ehem-tabor-q37770964` |
| Coordinates | 47.26958, 15.3247 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.26958/15.3247)) |
| Wikidata | [Q37770964](https://www.wikidata.org/wiki/Q37770964) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Frohnleiten |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | 2 |
| OSM `description` | Pavillon |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, marker 7, waterway 1, road 203, building 199, water 1, zone 8, wall 9).

Evidence: documented 0, mapped 297, inferred 0, derived 0; heights documented 21, inferred 0, unknown 108.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/553110264 historic=yes Q37771096 35 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 199 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 203 mapped (trace size budget); minor lanes are not drawn
- origin moved 35 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.26958/15.3247) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=1; wikidata:Q37770964 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/ehem-tabor-q37770964.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
