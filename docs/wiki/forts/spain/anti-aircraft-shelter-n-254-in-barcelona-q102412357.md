# Anti-aircraft shelter n.254 in Barcelona

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `anti-aircraft-shelter-n-254-in-barcelona-q102412357` |
| Coordinates | 41.37904, 2.16711 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.37904/2.16711)) |
| Wikidata | [Q102412357](https://www.wikidata.org/wiki/Q102412357) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter |
| Administrative area | Barcelona |
| Inception | 1937 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 8, road 174, building 487, waterway 3, wall 1, zone 1).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 58, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/249402100 historic=castle Q20104635 137 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 487 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 174 mapped (trace size budget); minor lanes are not drawn
- origin moved 138 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.37904/2.16711) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter; sitelinks=1; wikidata:Q102412357 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/anti-aircraft-shelter-n-254-in-barcelona-q102412357.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
