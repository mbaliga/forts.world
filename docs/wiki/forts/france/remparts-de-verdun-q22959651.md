# Remparts de Verdun

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `remparts-de-verdun-q22959651` |
| Coordinates | 49.1593, 5.3901 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.1593/5.3901)) |
| Wikidata | [Q22959651](https://www.wikidata.org/wiki/Q22959651) (CC0) |
| Wikidata class | fort |
| Types | compound (fortification) |
| Administrative area | Verdun |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | monument |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 226 elements (outline 1, marker 6, road 83, water 1, building 425, waterway 1, retaining-wall 2, wall 8, zone 4).

Evidence: documented 0, mapped 226, inferred 0, derived 0; heights documented 9, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/94431168 historic=monument Q22959669 504 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 425 mapped (trace size budget); the rest of the town is not drawn
- origin moved 504 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.1593/5.3901) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; compound (fortification); sitelinks=2; wikidata:Q22959651 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 226 elements); data/traces/remparts-de-verdun-q22959651.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
