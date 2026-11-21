# Château de Taillebourg

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-taillebourg-q2729031` |
| Coordinates | 45.83389, -0.6475 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.83389/-0.6475)) |
| Wikidata | [Q2729031](https://www.wikidata.org/wiki/Q2729031) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Taillebourg |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 205 elements (outline 1, marker 1, waterway 2, road 67, zone 4, water 1, building 334, wall 9).

Evidence: documented 0, mapped 205, inferred 0, derived 0; heights documented 0, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/199354482 historic=castle Q2729031 61 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 334 mapped (trace size budget); the rest of the town is not drawn
- origin moved 59 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.83389/-0.6475) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q2729031 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 205 elements); data/traces/chateau-de-taillebourg-q2729031.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
