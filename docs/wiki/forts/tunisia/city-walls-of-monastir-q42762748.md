# City walls of Monastir

> Tunisia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-monastir-q42762748` |
| Coordinates | 35.77278, 10.83054 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.77278/10.83054)) |
| Wikidata | [Q42762748](https://www.wikidata.org/wiki/Q42762748) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Monastir |
| Designations | listed monument of Tunisia |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 209 elements (outline 1, marker 2, road 104, zone 22, building 68, wall 9, coastline 1, retaining-wall 1, water 1).

Evidence: documented 0, mapped 209, inferred 0, derived 1; heights documented 0, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/666774260 historic=castle 279 m from ledger point
- origin moved 279 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":29,"medianInside":3.8,"medianOutside":14.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.77278/10.83054) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q42762748 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 209 elements); data/traces/city-walls-of-monastir-q42762748.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/tunisia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
