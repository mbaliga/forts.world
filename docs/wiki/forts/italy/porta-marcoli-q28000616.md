# Porta Marcoli

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-marcoli-q28000616` |
| Coordinates | 43.4016, 10.86473 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.4016/10.86473)) |
| Wikidata | [Q28000616](https://www.wikidata.org/wiki/Q28000616) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Volterra |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 276 elements (outline 1, marker 5, road 138, zone 4, building 277, wall 7, water 1).

Evidence: documented 0, mapped 276, inferred 0, derived 0; heights documented 6, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2144345 historic=castle 167 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 277 mapped (trace size budget); the rest of the town is not drawn
- origin moved 165 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.4016/10.86473) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q28000616 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 276 elements); data/traces/porta-marcoli-q28000616.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
