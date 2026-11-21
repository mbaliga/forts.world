# Château de Meyrargues

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-meyrargues-q22916316` |
| Coordinates | 43.63421, 5.53004 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.63421/5.53004)) |
| Wikidata | [Q22916316](https://www.wikidata.org/wiki/Q22916316) (CC0) |
| Wikidata class | castle |
| Types | castle\|chateau\|château |
| Administrative area | Meyrargues |
| Inception | C10 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | chateau |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 206 elements (outline 1, marker 1, building 438, road 80, zone 1, waterway 2, wall 1).

Evidence: documented 0, mapped 206, inferred 0, derived 0; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/85495249 historic=castle Q22916316 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 438 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.63421/5.53004) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|chateau\|château; sitelinks=2; wikidata:Q22916316 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 206 elements); data/traces/chateau-de-meyrargues-q22916316.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
