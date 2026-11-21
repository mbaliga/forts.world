# Castle Levan

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-levan-q5050179` |
| Coordinates | 55.9471, -4.85874 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.9471/-4.85874)) |
| Wikidata | [Q5050179](https://www.wikidata.org/wiki/Q5050179) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Inverclyde |
| Designations | category B listed building |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 163 elements (outline 1, road 28, building 132, coastline 1, water 1).

Evidence: documented 0, mapped 163, inferred 0, derived 1; heights documented 0, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1041697655 historic=castle Q5050179 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":22,"medianInside":1.4,"medianOutside":32.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.9471/-4.85874) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=5; wikidata:Q5050179 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 163 elements); data/traces/castle-levan-q5050179.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
