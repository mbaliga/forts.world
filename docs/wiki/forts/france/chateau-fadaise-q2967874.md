# Château Fadaise

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-fadaise-q2967874` |
| Coordinates | 43.83589, 4.35565 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.83589/4.35565)) |
| Wikidata | [Q2967874](https://www.wikidata.org/wiki/Q2967874) (CC0) |
| Wikidata class | castle |
| Types | castle\|private mansion |
| Administrative area | Nîmes |
| Inception | C17 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 183 elements (outline 1, marker 1, road 58, waterway 3, building 498).

Evidence: documented 0, mapped 183, inferred 0, derived 0; heights documented 5, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/41853792 historic=castle Q2967874 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 498 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.83589/4.35565) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|private mansion; sitelinks=2; wikidata:Q2967874 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 183 elements); data/traces/chateau-fadaise-q2967874.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
