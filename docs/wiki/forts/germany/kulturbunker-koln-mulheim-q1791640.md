# Kulturbunker Köln-Mülheim

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kulturbunker-koln-mulheim-q1791640` |
| Coordinates | 50.9697, 7.00856 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.9697/7.00856)) |
| Wikidata | [Q1791640](https://www.wikidata.org/wiki/Q1791640) (CC0) |
| Wikidata class | fortification |
| Types | cultural center\|air-raid shelter |
| Administrative area | Mülheim |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 2 |
| OSM `historic` | bunker |
| OSM `website` | https://kulturbunker-muelheim.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 359 elements (outline 1, marker 5, road 142, building 323, wall 74, zone 9, retaining-wall 7, waterway 1).

Evidence: documented 0, mapped 359, inferred 0, derived 0; heights documented 122, inferred 0, unknown 79.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/30270355 historic=bunker Q1791640 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 323 mapped (trace size budget); the rest of the town is not drawn
- origin moved 21 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.9697/7.00856) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural center\|air-raid shelter; sitelinks=2; wikidata:Q1791640 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 362 elements); data/traces/kulturbunker-koln-mulheim-q1791640.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 359 elements; outline osm:way/30270355 historic=bunker Q1791640 21 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
