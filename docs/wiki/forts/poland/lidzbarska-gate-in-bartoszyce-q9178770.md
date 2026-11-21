# Lidzbarska Gate in Bartoszyce

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lidzbarska-gate-in-bartoszyce-q9178770` |
| Coordinates | 54.25038, 20.80873 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.25038/20.80873)) |
| Wikidata | [Q9178770](https://www.wikidata.org/wiki/Q9178770) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|architectural heritage monument |
| Administrative area | Bartoszyce |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 361 elements (outline 1, marker 1, road 210, waterway 1, building 231, zone 84, wall 4).

Evidence: documented 0, mapped 361, inferred 0, derived 0; heights documented 100, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/248053997 historic=yes 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 231 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 210 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.25038/20.80873) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|architectural heritage monument; sitelinks=3; wikidata:Q9178770 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 361 elements); data/traces/lidzbarska-gate-in-bartoszyce-q9178770.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
