# Nordabschnitt der Stadtmauer

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nordabschnitt-der-stadtmauer-q126122354` |
| Coordinates | 48.70323, 14.89213 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.70323/14.89213)) |
| Wikidata | [Q126122354](https://www.wikidata.org/wiki/Q126122354) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Weitra |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 361 elements (outline 1, marker 5, road 161, wall 30, waterway 4, building 239, retaining-wall 12, zone 38, water 1).

Evidence: documented 0, mapped 361, inferred 0, derived 0; heights documented 0, inferred 0, unknown 162.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1334209 historic=castle Q1572598 434 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 239 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 161 mapped (trace size budget); minor lanes are not drawn
- origin moved 430 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.70323/14.89213) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q126122354 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 361 elements); data/traces/nordabschnitt-der-stadtmauer-q126122354.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
