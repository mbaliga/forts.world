# Kiek in de Kök

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kiek-in-de-kok-q914562` |
| Coordinates | 59.43475, 24.74125 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.43475/24.74125)) |
| Wikidata | [Q914562](https://www.wikidata.org/wiki/Q914562) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Tallinn |
| Inception | 1475 |
| Wikipedia language editions | 26 |
| OSM `historic` | yes |
| OSM `website` | https://linnamuuseum.ee/kiek-de-kok/ |

## What the model contains

Tier **T1**, status `outline+walls`, 356 elements (outline 1, marker 10, road 308, water 1, building 110, wall 31, retaining-wall 32, zone 20, waterway 1).

Evidence: documented 0, mapped 356, inferred 0, derived 0; heights documented 86, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3518935 historic=yes Q914562 5 m from ledger point
- roads capped: kept the 150 longest of 308 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.43475/24.74125) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=26; wikidata:Q914562 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 356 elements); data/traces/kiek-in-de-kok-q914562.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
