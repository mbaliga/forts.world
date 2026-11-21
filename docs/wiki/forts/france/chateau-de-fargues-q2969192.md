# Château de Fargues

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-fargues-q2969192` |
| Coordinates | 43.95715, 4.85955 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.95715/4.85955)) |
| Wikidata | [Q2969192](https://www.wikidata.org/wiki/Q2969192) (CC0) |
| Wikidata class | castle |
| Types | castle\|castle\|château |
| Administrative area | Le Pontet |
| Inception | 1400 |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 242 elements (outline 1, road 86, building 313, water 4, waterway 4, zone 18, wall 9).

Evidence: documented 0, mapped 242, inferred 0, derived 0; heights documented 0, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1390125 historic=castle Q2969192 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 313 mapped (trace size budget); the rest of the town is not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.95715/4.85955) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|castle\|château; sitelinks=2; wikidata:Q2969192 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 242 elements); data/traces/chateau-de-fargues-q2969192.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
