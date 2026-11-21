# Porta Ombriano

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-ombriano-q38298110` |
| Coordinates | 45.36063, 9.68258 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.36063/9.68258)) |
| Wikidata | [Q38298110](https://www.wikidata.org/wiki/Q38298110) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Crema |
| Wikipedia language editions | 4 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, road 162, waterway 2, building 287, wall 18, water 2, zone 3).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 2, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/42303483 historic=city_gate Q38298110 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 287 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 162 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.36063/9.68258) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=4; wikidata:Q38298110 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 235 elements); data/traces/porta-ombriano-q38298110.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 296 elements; outline osm:way/42303483 historic=city_gate Q38298110 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
