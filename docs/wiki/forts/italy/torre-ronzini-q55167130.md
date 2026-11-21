# Torre Ronzini

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-ronzini-q55167130` |
| Coordinates | 43.84391, 10.50247 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.84391/10.50247)) |
| Wikidata | [Q55167130](https://www.wikidata.org/wiki/Q55167130) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Lucca |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 151 elements (outline 1, marker 5, road 169, building 529, waterway 2, zone 2, wall 14).

Evidence: documented 0, mapped 151, inferred 0, derived 0; heights documented 5, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/368911093 historic=(none; chosen by its Wikidata id) Q55167130 1 m from ledger point
- pruned to the outline plus 150 m: 722 -> 357 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 263 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 83 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.84391/10.50247) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=1; wikidata:Q55167130 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 306 elements); data/traces/torre-ronzini-q55167130.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 151 elements; outline osm:way/368911093 historic=(none; chosen by its Wikidata id) Q55167130 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
