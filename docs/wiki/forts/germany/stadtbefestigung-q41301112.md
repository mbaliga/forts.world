# Stadtbefestigung

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtbefestigung-q41301112` |
| Coordinates | 49.97551, 9.14398 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.97551/9.14398)) |
| Wikidata | [Q41301112](https://www.wikidata.org/wiki/Q41301112) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Aschaffenburg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.schloesser.bayern.de/deutsch/schloss/objekte/as_joh.htm |

## What the model contains

Tier **T1**, status `outline+walls`, 316 elements (outline 1, marker 10, road 180, building 96, retaining-wall 16, zone 2, wall 9, waterway 2).

Evidence: documented 0, mapped 316, inferred 0, derived 0; heights documented 17, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7644 historic=castle Q705848 175 m from ledger point
- origin moved 172 m from the ledger point to the centre of the mapped site
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.97551/9.14398) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q41301112 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 316 elements); data/traces/stadtbefestigung-q41301112.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
