# Spalter Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `spalter-tor-q2306560` |
| Coordinates | 49.106, 10.9844 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.106/10.9844)) |
| Wikidata | [Q2306560](https://www.wikidata.org/wiki/Q2306560) (CC0) |
| Wikidata class | fortification |
| Types | tower\|gate\|city gate\|timber-framed house |
| Administrative area | Pleinfeld |
| Inception | 1568 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 328 elements (outline 1, road 77, building 242, wall 1, zone 6, waterway 1).

Evidence: documented 0, mapped 328, inferred 0, derived 0; heights documented 0, inferred 0, unknown 243.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/179712131 historic=city_gate Q2306560 5 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.106/10.9844) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|gate\|city gate\|timber-framed house; sitelinks=2; wikidata:Q2306560 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 330 elements); data/traces/spalter-tor-q2306560.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 328 elements; outline osm:way/179712131 historic=city_gate Q2306560 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
