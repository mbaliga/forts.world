# Asile de Drancy

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `asile-de-drancy-q22915888` |
| Coordinates | 48.92563, 2.44288 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.92563/2.44288)) |
| Wikidata | [Q22915888](https://www.wikidata.org/wiki/Q22915888) (CC0) |
| Wikidata class | castle |
| Types | castle\|hospital\|château |
| Administrative area | Drancy |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 218 elements (outline 1, marker 1, road 83, building 390, zone 12, waterway 1).

Evidence: documented 0, mapped 218, inferred 0, derived 0; heights documented 3, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/84433314 historic=castle Q22915888 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 390 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.92563/2.44288) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|hospital\|château; sitelinks=1; wikidata:Q22915888 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 218 elements); data/traces/asile-de-drancy-q22915888.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
