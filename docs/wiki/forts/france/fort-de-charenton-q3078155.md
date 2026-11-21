# Fort de Charenton

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-charenton-q3078155` |
| Coordinates | 48.80878, 2.42893 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.80878/2.42893)) |
| Wikidata | [Q3078155](https://www.wikidata.org/wiki/Q3078155) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Maisons-Alfort |
| Inception | 1845 |
| Wikipedia language editions | 4 |
| OSM `barrier` | retaining_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 1, road 333, zone 13, building 310, wall 23, retaining-wall 3).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 5, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/161659040 historic=(none; chosen by its Wikidata id) Q3078155 44 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 310 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 333 mapped (trace size budget); minor lanes are not drawn
- origin moved 42 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.80878/2.42893) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q3078155 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 145 elements); data/traces/fort-de-charenton-q3078155.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 311 elements; outline osm:way/161659040 historic=(none; chosen by its Wikidata id) Q3078155 44 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
