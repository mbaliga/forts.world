# Rothenbaumchaussee bunker

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rothenbaumchaussee-bunker-q130337020` |
| Coordinates | 53.56227, 9.99036 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.56227/9.99036)) |
| Wikidata | [Q130337020](https://www.wikidata.org/wiki/Q130337020) (CC0) |
| Wikidata class | fortification |
| Types | Zombeck tower |
| Administrative area | Hamburg |
| Designations | heritage monument in Hamburg |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `description` | Logenhaus der Hamburger Logen des Freimaurerordens |

## What the model contains

Tier **T1**, status `outline+walls`, 303 elements (outline 1, marker 69, road 248, building 56, zone 21, wall 4, retaining-wall 2).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 27, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/217622591 historic=yes Q38967434 335 m from ledger point
- roads capped: kept the 150 longest of 248 mapped (trace size budget); minor lanes are not drawn
- origin moved 335 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.56227/9.99036) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Zombeck tower; sitelinks=1; wikidata:Q130337020 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 303 elements); data/traces/rothenbaumchaussee-bunker-q130337020.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
