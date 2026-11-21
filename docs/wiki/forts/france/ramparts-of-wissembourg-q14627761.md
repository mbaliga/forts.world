# Ramparts of Wissembourg

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ramparts-of-wissembourg-q14627761` |
| Coordinates | 49.03669, 7.94464 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.03669/7.94464)) |
| Wikidata | [Q14627761](https://www.wikidata.org/wiki/Q14627761) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Wissembourg |
| Inception | 1262 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 308 elements (outline 1, marker 2, road 164, waterway 3, building 362, wall 17, zone 12, water 2, retaining-wall 1).

Evidence: documented 0, mapped 308, inferred 0, derived 0; heights documented 9, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/167263630 historic=castle Q15950353 215 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 362 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 164 mapped (trace size budget); minor lanes are not drawn
- origin moved 214 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.03669/7.94464) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=2; wikidata:Q14627761 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 308 elements); data/traces/ramparts-of-wissembourg-q14627761.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
