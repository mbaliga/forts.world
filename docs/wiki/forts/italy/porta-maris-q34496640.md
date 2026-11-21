# Porta Maris

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-maris-q34496640` |
| Coordinates | 43.31534, 13.58241 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.31534/13.58241)) |
| Wikidata | [Q34496640](https://www.wikidata.org/wiki/Q34496640) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Morrovalle |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 273 elements (outline 1, marker 1, road 134, building 303, zone 12, wall 5).

Evidence: documented 0, mapped 273, inferred 0, derived 0; heights documented 2, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1339203654 historic=building 175 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 303 mapped (trace size budget); the rest of the town is not drawn
- origin moved 173 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.31534/13.58241) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q34496640 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 273 elements); data/traces/porta-maris-q34496640.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
