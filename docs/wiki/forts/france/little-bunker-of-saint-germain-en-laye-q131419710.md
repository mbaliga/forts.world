# Little bunker of Saint-Germain-en-Laye

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `little-bunker-of-saint-germain-en-laye-q131419710` |
| Coordinates | 48.89822, 2.09722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.89822/2.09722)) |
| Wikidata | [Q131419710](https://www.wikidata.org/wiki/Q131419710) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Saint-Germain-en-Laye |
| Designations | classified historical monument |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 3, road 250, wall 5, building 183, zone 17, retaining-wall 3).

Evidence: documented 0, mapped 299, inferred 0, derived 0; heights documented 5, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3493755 historic=castle Q1520841 87 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 183 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 250 mapped (trace size budget); minor lanes are not drawn
- origin moved 87 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.89822/2.09722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=0; wikidata:Q131419710 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/little-bunker-of-saint-germain-en-laye-q131419710.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
