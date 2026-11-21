# Bellevue Palace

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bellevue-palace-q317091` |
| Coordinates | 52.51725, 13.35315 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.51725/13.35315)) |
| Wikidata | [Q317091](https://www.wikidata.org/wiki/Q317091) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace\|château\|official residence |
| Administrative area | Bezirk Mitte |
| Inception | 1786 |
| Designations | cultural heritage monument in Berlin |
| Wikipedia language editions | 37 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `description` | Wohnsitz des Bundespräsidenten |
| OSM `website` | https://www.bundespraesident.de/DE/Die-Amtssitze/Schloss-Bellevue/schloss-bellevue-node.html |

## What the model contains

Tier **T1**, status `outline+walls`, 364 elements (outline 1, marker 6, road 257, water 7, zone 59, waterway 2, wall 10, building 14, retaining-wall 8).

Evidence: documented 0, mapped 364, inferred 0, derived 0; heights documented 11, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1034456118 historic=castle Q317091 12 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.51725/13.35315) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace\|château\|official residence; sitelinks=37; wikidata:Q317091 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 364 elements); data/traces/bellevue-palace-q317091.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
