# château de Frescati

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-frescati-q22940217` |
| Coordinates | 43.88946, 1.19762 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.88946/1.19762)) |
| Wikidata | [Q22940217](https://www.wikidata.org/wiki/Q22940217) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Mas-Grenier |
| Inception | C18 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 227 elements (outline 1, marker 1, road 85, waterway 2, building 296, wall 5, zone 13).

Evidence: documented 0, mapped 227, inferred 0, derived 0; heights documented 0, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/341215269 historic=castle Q22940217 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 296 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.88946/1.19762) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=0; wikidata:Q22940217 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 227 elements); data/traces/chateau-de-frescati-q22940217.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
