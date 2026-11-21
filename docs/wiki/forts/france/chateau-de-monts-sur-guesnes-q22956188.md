# château de Monts-sur-Guesnes

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-monts-sur-guesnes-q22956188` |
| Coordinates | 46.91967, 0.21133 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.91967/0.21133)) |
| Wikidata | [Q22956188](https://www.wikidata.org/wiki/Q22956188) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Monts-sur-Guesnes |
| Designations | classified historical monument |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `location-only`, 160 elements (marker 3, road 34, building 387, zone 1, wall 1, water 1).

Evidence: documented 0, mapped 160, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7672938 historic=castle Q22956188 1 m from ledger point
- site is a site relation of 12 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (68 x 71 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 387 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.91967/0.21133) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=1; wikidata:Q22956188 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 160 elements); data/traces/chateau-de-monts-sur-guesnes-q22956188.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
