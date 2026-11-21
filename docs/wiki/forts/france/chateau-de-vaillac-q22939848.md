# Château de Vaillac

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-vaillac-q22939848` |
| Coordinates | 44.67368, 1.53224 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.67368/1.53224)) |
| Wikidata | [Q22939848](https://www.wikidata.org/wiki/Q22939848) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Cœur-de-Causse |
| Inception | C14 |
| Designations | classified historical monument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `location-only`, 65 elements (marker 1, road 18, building 31, zone 11, wall 4).

Evidence: documented 0, mapped 65, inferred 0, derived 0; heights documented 0, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/16164345 historic=castle Q22939848 5 m from ledger point
- site is a site relation of 7 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (93 x 99 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.67368/1.53224) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=3; wikidata:Q22939848 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 65 elements); data/traces/chateau-de-vaillac-q22939848.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
