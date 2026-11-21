# Ancien hôtel d'Orvilliers

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ancien-hotel-d-orvilliers-q22933358` |
| Coordinates | 46.56522, 3.33314 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.56522/3.33314)) |
| Wikidata | [Q22933358](https://www.wikidata.org/wiki/Q22933358) (CC0) |
| Wikidata class | castle |
| Types | castle\|private mansion |
| Administrative area | Moulins |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 304 elements (outline 1, marker 5, road 125, building 456, zone 7, wall 43, water 3).

Evidence: documented 0, mapped 304, inferred 0, derived 0; heights documented 2, inferred 0, unknown 161.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/77184499 historic=castle Q22933244 220 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 456 mapped (trace size budget); the rest of the town is not drawn
- origin moved 217 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.56522/3.33314) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|private mansion; sitelinks=2; wikidata:Q22933358 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 304 elements); data/traces/ancien-hotel-d-orvilliers-q22933358.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
