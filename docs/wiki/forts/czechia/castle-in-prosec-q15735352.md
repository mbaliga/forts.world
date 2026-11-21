# Castle in Proseč

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-in-prosec-q15735352` |
| Coordinates | 49.4438, 15.0456 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.4438/15.0456)) |
| Wikidata | [Q15735352](https://www.wikidata.org/wiki/Q15735352) (CC0) |
| Wikidata class | castle |
| Types | retirement home\|château\|fortified house |
| Administrative area | Proseč |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |
| OSM `historic` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 87 elements (outline 1, water 3, waterway 1, road 17, building 53, zone 9, wall 3).

Evidence: documented 0, mapped 87, inferred 0, derived 0; heights documented 8, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/260561735 historic=manor Q15735352 11 m from ledger point
- origin moved 12 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.4438/15.0456) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; retirement home\|château\|fortified house; sitelinks=2; wikidata:Q15735352 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 88 elements); data/traces/castle-in-prosec-q15735352.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 87 elements; outline osm:way/260561735 historic=manor Q15735352 11 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
