# Stadttor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadttor-q41388350` |
| Coordinates | 49.843, 9.14842 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.843/9.14842)) |
| Wikidata | [Q41388350](https://www.wikidata.org/wiki/Q41388350) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Obernburg am Main |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | yes |
| OSM `description` | Hexenturm Teil der Stadtbefestigung in Obernburg am Main |
| OSM `website` | https://www.hvv-obernburg.de/html/stadtbefestigung.html#Hexenturm |

## What the model contains

Tier **T1**, status `outline+walls`, 270 elements (outline 1, marker 3, road 133, water 1, building 395, wall 9, waterway 1, retaining-wall 1, zone 1).

Evidence: documented 0, mapped 270, inferred 0, derived 0; heights documented 1, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/459460489 historic=yes 67 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 395 mapped (trace size budget); the rest of the town is not drawn
- origin moved 66 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.843/9.14842) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q41388350 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 270 elements); data/traces/stadttor-q41388350.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
