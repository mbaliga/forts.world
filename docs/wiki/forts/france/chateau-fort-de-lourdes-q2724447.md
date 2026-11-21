# Château fort de Lourdes

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-fort-de-lourdes-q2724447` |
| Coordinates | 43.09667, -0.04917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.09667/-0.04917)) |
| Wikidata | [Q2724447](https://www.wikidata.org/wiki/Q2724447) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Lourdes |
| Designations | classified historical monument |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 328 elements (outline 1, marker 1, road 234, wall 14, building 776, zone 16, retaining-wall 24, waterway 2).

Evidence: documented 0, mapped 328, inferred 0, derived 0; heights documented 0, inferred 0, unknown 158.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/53014685 historic=castle Q2724447 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 776 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 234 mapped (trace size budget); minor lanes are not drawn
- origin moved 21 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.09667/-0.04917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=9; wikidata:Q2724447 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 328 elements); data/traces/chateau-fort-de-lourdes-q2724447.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
