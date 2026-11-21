# Remparts de Die

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `remparts-de-die-q22966805` |
| Coordinates | 44.75094, 5.37052 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.75094/5.37052)) |
| Wikidata | [Q22966805](https://www.wikidata.org/wiki/Q22966805) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Die |
| Designations | classified historical monument |
| Wikipedia language editions | 3 |
| OSM `historic` | building |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 290 elements (outline 1, marker 1, road 131, waterway 1, building 841, wall 34, zone 1, retaining-wall 1).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 22, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/72739906 historic=building Q22976391 231 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 841 mapped (trace size budget); the rest of the town is not drawn
- origin moved 230 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.75094/5.37052) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=3; wikidata:Q22966805 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 290 elements); data/traces/remparts-de-die-q22966805.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
