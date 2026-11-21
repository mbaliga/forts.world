# château du Grand Jardin

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-du-grand-jardin-q2971697` |
| Coordinates | 43.83429, 5.98285 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.83429/5.98285)) |
| Wikidata | [Q2971697](https://www.wikidata.org/wiki/Q2971697) (CC0) |
| Wikidata class | castle |
| Types | castle\|castle\|château |
| Administrative area | Valensole |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 1, road 172, building 910, zone 6, wall 3, retaining-wall 8, waterway 22).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 1, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/294877134 historic=yes 305 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 910 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 172 mapped (trace size budget); minor lanes are not drawn
- origin moved 305 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.83429/5.98285) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|castle\|château; sitelinks=1; wikidata:Q2971697 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/chateau-du-grand-jardin-q2971697.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
