# Tower of Santa Maria

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-of-santa-maria-q3995626` |
| Coordinates | 43.72436, 10.3937 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.72436/10.3937)) |
| Wikidata | [Q3995626](https://www.wikidata.org/wiki/Q3995626) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Pisa |
| Inception | 1155 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | tower |

## What the model contains

Tier **T1**, status `outline+walls`, 141 elements (outline 1, marker 4, road 170, building 115, zone 16, wall 26).

Evidence: documented 0, mapped 141, inferred 0, derived 0; heights documented 30, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/208160433 historic=tower Q3995626 3 m from ledger point
- pruned to the outline plus 150 m: 332 -> 141 elements
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.72436/10.3937) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=3; wikidata:Q3995626 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 285 elements); data/traces/tower-of-santa-maria-q3995626.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 141 elements; outline osm:way/208160433 historic=tower Q3995626 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
