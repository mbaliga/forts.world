# Citadelle de Bitche

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadelle-de-bitche-q206240` |
| Coordinates | 49.05278, 7.43111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.05278/7.43111)) |
| Wikidata | [Q206240](https://www.wikidata.org/wiki/Q206240) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Bitche |
| Designations | monument selected by the  Mission d'Identification du Patrimoine Immobilier en Péril (2019)\|classified historical monument |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |
| OSM `heritage` | 2 |
| OSM `website` | https://www.citadelle-bitche.com/fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 322 elements (outline 1, marker 5, road 234, building 949, wall 28, waterway 5, zone 11, retaining-wall 2).

Evidence: documented 0, mapped 322, inferred 0, derived 0; heights documented 0, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/133569825 historic=castle Q206240 80 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 949 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 234 mapped (trace size budget); minor lanes are not drawn
- origin moved 84 m from the ledger point to the outline centroid
- 40 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.05278/7.43111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=5; wikidata:Q206240 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 322 elements); data/traces/citadelle-de-bitche-q206240.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
