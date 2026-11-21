# Fahrtor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fahrtor-q1392709` |
| Coordinates | 50.1094, 8.68214 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.1094/8.68214)) |
| Wikidata | [Q1392709](https://www.wikidata.org/wiki/Q1392709) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Frankfurt |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | 1748 Hauptverwaltung Kaiserliche Reichspost. 1805 - 1813 Residenz des Fürstprimas und Großherzogs von Frankfurt Karl Theodor von Dalberg. 1816 - 1866 Bundestag des Deutschen Bundes. 1895 Reichspost. 1908 Völkerkundemuseum. 2009 Geschäftsräume. |

## What the model contains

Tier **T1**, status `outline+walls`, 282 elements (outline 1, marker 2, road 328, building 109, wall 8, retaining-wall 12).

Evidence: documented 0, mapped 282, inferred 0, derived 0; heights documented 41, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1688621 historic=castle Q282656 661 m from ledger point
- roads capped: kept the 150 longest of 328 mapped (trace size budget); minor lanes are not drawn
- origin moved 661 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.1094/8.68214) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q1392709 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 282 elements); data/traces/fahrtor-q1392709.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
