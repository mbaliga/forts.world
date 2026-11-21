# Omsk Fortress

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `omsk-fortress-q4334703` |
| Coordinates | 54.98556, 73.36283 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.98556/73.36283)) |
| Wikidata | [Q4334703](https://www.wikidata.org/wiki/Q4334703) (CC0) |
| Wikidata class | fort |
| Types | heritage site\|fortress\|architectural landmark |
| Administrative area | Omsk |
| Inception | 1768 |
| Designations | regional cultural heritage site in Russia |
| Wikipedia language editions | 3 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 115 elements (outline 1, marker 11, road 58, building 38, waterway 2, zone 4, wall 1).

Evidence: documented 0, mapped 115, inferred 0, derived 0; heights documented 8, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/55553610 historic=building 94 m from ledger point
- origin moved 98 m from the ledger point to the centre of the mapped site
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.98556/73.36283) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; heritage site\|fortress\|architectural landmark; sitelinks=3; wikidata:Q4334703 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 115 elements); data/traces/omsk-fortress-q4334703.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
