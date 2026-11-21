# Portal d'en Vives

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `portal-d-en-vives-q105957445` |
| Coordinates | 41.57803, 1.61673 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.57803/1.61673)) |
| Wikidata | [Q105957445](https://www.wikidata.org/wiki/Q105957445) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Igualada |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 279 elements (outline 1, marker 13, road 125, waterway 8, building 454, wall 12).

Evidence: documented 0, mapped 279, inferred 0, derived 0; heights documented 2, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/422182674 historic=(none; chosen by its Wikidata id) Q105957445 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 454 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.57803/1.61673) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q105957445 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 280 elements); data/traces/portal-d-en-vives-q105957445.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 279 elements; outline osm:way/422182674 historic=(none; chosen by its Wikidata id) Q105957445 6 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
