# Brána Všech svatých

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brana-vsech-svatych-q66551918` |
| Coordinates | 49.59781, 17.26033 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.59781/17.26033)) |
| Wikidata | [Q66551918](https://www.wikidata.org/wiki/Q66551918) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Olomouc |
| Designations | part of cultural heritage site in the Czech Republic |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 369 elements (outline 1, marker 37, road 326, building 117, wall 28, waterway 2, zone 33, retaining-wall 1).

Evidence: documented 0, mapped 369, inferred 0, derived 0; heights documented 68, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1272094 historic=castle Q12042566 147 m from ledger point
- roads capped: kept the 150 longest of 326 mapped (trace size budget); minor lanes are not drawn
- origin moved 148 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.59781/17.26033) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q66551918 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 369 elements); data/traces/brana-vsech-svatych-q66551918.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
