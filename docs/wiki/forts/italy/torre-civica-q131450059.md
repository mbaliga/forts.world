# Torre Civica

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-civica-q131450059` |
| Coordinates | 44.40269, 7.68638 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.40269/7.68638)) |
| Wikidata | [Q131450059](https://www.wikidata.org/wiki/Q131450059) (CC0) |
| Wikidata class | fortification |
| Types | tower\|city gate |
| Administrative area | Margarita |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline-only`, 254 elements (outline 1, marker 4, waterway 10, road 113, building 327, zone 6).

Evidence: documented 0, mapped 254, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1394097778 historic=(none; chosen by its Wikidata id) Q131450059 18 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 327 mapped (trace size budget); the rest of the town is not drawn
- origin moved 18 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.40269/7.68638) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|city gate; sitelinks=1; wikidata:Q131450059 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 252 elements); data/traces/torre-civica-q131450059.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 254 elements; outline osm:way/1394097778 historic=(none; chosen by its Wikidata id) Q131450059 18 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
