# Horno de la Ciudadela de Pamplona

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `horno-de-la-ciudadela-de-pamplona-q130427607` |
| Coordinates | 42.81372, -1.64859 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.81372/-1.64859)) |
| Wikidata | [Q130427607](https://www.wikidata.org/wiki/Q130427607) (CC0) |
| Wikidata class | fort |
| Types | fortress\|oven\|art museum |
| Administrative area | Navarre |
| Inception | 1640 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 330 elements (outline 1, marker 2, road 512, zone 41, building 53, water 5, wall 65, retaining-wall 1, waterway 12).

Evidence: documented 0, mapped 330, inferred 0, derived 0; heights documented 22, inferred 0, unknown 97.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/42946489 historic=castle Q206258 232 m from ledger point
- roads capped: kept the 150 longest of 512 mapped (trace size budget); minor lanes are not drawn
- origin moved 234 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.81372/-1.64859) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|oven\|art museum; sitelinks=1; wikidata:Q130427607 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 330 elements); data/traces/horno-de-la-ciudadela-de-pamplona-q130427607.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
