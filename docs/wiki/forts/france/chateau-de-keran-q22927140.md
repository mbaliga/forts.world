# château de Kéran

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-keran-q22927140` |
| Coordinates | 47.6219, -2.84469 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.6219/-2.84469)) |
| Wikidata | [Q22927140](https://www.wikidata.org/wiki/Q22927140) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Arradon |
| Inception | C15 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 63 elements (outline 1, road 9, building 42, zone 10, coastline 1).

Evidence: documented 0, mapped 63, inferred 0, derived 0; heights documented 0, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/167335271 historic=castle Q22927140 8 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 9 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.6219/-2.84469) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=1; wikidata:Q22927140 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 63 elements); data/traces/chateau-de-keran-q22927140.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
