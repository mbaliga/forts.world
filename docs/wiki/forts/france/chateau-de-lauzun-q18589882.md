# Château de Lauzun

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-lauzun-q18589882` |
| Coordinates | 44.62878, 0.46044 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.62878/0.46044)) |
| Wikidata | [Q18589882](https://www.wikidata.org/wiki/Q18589882) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Lauzun |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 179 elements (outline 1, marker 1, water 2, road 46, building 396, wall 3, zone 5, waterway 1).

Evidence: documented 0, mapped 179, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/255376421 historic=castle Q18589882 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 396 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.62878/0.46044) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q18589882 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 179 elements); data/traces/chateau-de-lauzun-q18589882.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
