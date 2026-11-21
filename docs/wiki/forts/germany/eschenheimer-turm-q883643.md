# Eschenheimer Turm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eschenheimer-turm-q883643` |
| Coordinates | 50.11694, 8.67972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.11694/8.67972)) |
| Wikidata | [Q883643](https://www.wikidata.org/wiki/Q883643) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Frankfurt-Innenstadt I |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | 1748 Hauptverwaltung Kaiserliche Reichspost. 1805 - 1813 Residenz des Fürstprimas und Großherzogs von Frankfurt Karl Theodor von Dalberg. 1816 - 1866 Bundestag des Deutschen Bundes. 1895 Reichspost. 1908 Völkerkundemuseum. 2009 Geschäftsräume. |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, marker 2, road 429, building 162, retaining-wall 16, wall 9).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 43, inferred 0, unknown 102.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1688621 historic=castle Q282656 197 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 162 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 429 mapped (trace size budget); minor lanes are not drawn
- origin moved 197 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.11694/8.67972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=8; wikidata:Q883643 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/eschenheimer-turm-q883643.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
