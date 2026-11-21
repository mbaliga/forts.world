# Burg Argenschwang

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-argenschwang-q1010835` |
| Coordinates | 49.8808, 7.70056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.8808/7.70056)) |
| Wikidata | [Q1010835](https://www.wikidata.org/wiki/Q1010835) (CC0) |
| Wikidata class | castle |
| Types | castle\|Kulturdenkmal |
| Administrative area | Argenschwang |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | yes |
| OSM `description` | dreigeschossiges Torhaus, 17. Jahrhundert;Ruine der im 12. Jahrhundert gegründeten, um 1793 zerstörten Rosenburg: zwei Geschosse des Palas, Reste eines bastionsartigen Baus mit Flankentürmen |
| OSM `ruins` | yes |
| OSM `website` | https://www.vg-ruedesheim.de/rathaus-verwaltung/fachbereiche/fachbereich-2-ordnung-soziales/standesamt-der-verbandsgemeinde/rosenburg-argenschwang/ |

## What the model contains

Tier **T1**, status `outline+walls`, 192 elements (outline 1, marker 1, road 39, building 144, zone 5, waterway 1, wall 1).

Evidence: documented 0, mapped 192, inferred 0, derived 0; heights documented 1, inferred 0, unknown 144.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10180309 historic=castle Q1010835 10 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.8808/7.70056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|Kulturdenkmal; sitelinks=3; wikidata:Q1010835 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 192 elements); data/traces/burg-argenschwang-q1010835.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
