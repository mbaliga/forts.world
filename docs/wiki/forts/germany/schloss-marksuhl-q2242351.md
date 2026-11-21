# Schloss Marksuhl

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-marksuhl-q2242351` |
| Coordinates | 50.91366, 10.2036 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.91366/10.2036)) |
| Wikidata | [Q2242351](https://www.wikidata.org/wiki/Q2242351) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Marksuhl |
| Inception | 1587 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `description` | Die Generalsanierung des Marksuhler Residenzschlosses wurde 2016 abgeschlossen. Treppenturm, West- und Nordflügel sowie Renaissance-Tor sind erhalten. Hofpflasterung wurde neuzeitlich gestaltet. Alle Wirtschaftsgebäude und Ostflügel fehlen. |

## What the model contains

Tier **T1**, status `outline+walls`, 185 elements (outline 1, marker 1, road 52, waterway 1, building 352, wall 7, zone 3).

Evidence: documented 0, mapped 185, inferred 0, derived 0; heights documented 0, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1187596149 historic=castle Q2242351 12 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 352 mapped (trace size budget); the rest of the town is not drawn
- origin moved 10 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.91366/10.2036) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=3; wikidata:Q2242351 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 185 elements); data/traces/schloss-marksuhl-q2242351.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
