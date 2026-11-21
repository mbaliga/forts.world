# Porta a Pinti

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-a-pinti-q17651468` |
| Coordinates | 43.7781, 11.2674 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.7781/11.2674)) |
| Wikidata | [Q17651468](https://www.wikidata.org/wiki/Q17651468) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Florence |
| Wikipedia language editions | 5 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 328 elements (outline 1, marker 1, road 168, wall 15, building 133, zone 10).

Evidence: documented 0, mapped 328, inferred 0, derived 0; heights documented 2, inferred 0, unknown 146.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/773884561 historic=building 30 m from ledger point
- origin moved 30 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.7781/11.2674) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=5; wikidata:Q17651468 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 328 elements); data/traces/porta-a-pinti-q17651468.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
