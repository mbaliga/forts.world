# Castell de l'Espluga

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-de-l-espluga-q11913130` |
| Coordinates | 41.3975, 1.10528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.3975/1.10528)) |
| Wikidata | [Q11913130](https://www.wikidata.org/wiki/Q11913130) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | L'Espluga de Francolí |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 304 elements (outline 1, road 138, waterway 1, building 675, wall 34, retaining-wall 10).

Evidence: documented 0, mapped 304, inferred 0, derived 0; heights documented 124, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/738846419 historic=building 189 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 675 mapped (trace size budget); the rest of the town is not drawn
- origin moved 188 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.3975/1.10528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q11913130 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 304 elements); data/traces/castell-de-l-espluga-q11913130.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
