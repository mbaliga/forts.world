# manoir de Garaison

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manoir-de-garaison-q22939947` |
| Coordinates | 43.20669, 0.50394 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.20669/0.50394)) |
| Wikidata | [Q22939947](https://www.wikidata.org/wiki/Q22939947) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|manor estate |
| Administrative area | Monléon-Magnoac |
| Inception | C14 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `location-only`, 64 elements (marker 1, road 9, water 1, waterway 3, zone 23, wall 3, building 24).

Evidence: documented 0, mapped 64, inferred 0, derived 0; heights documented 0, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7381894 historic=yes Q22939945 127 m from ledger point
- site is a site relation of 3 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (136 x 86 m)
- origin moved 133 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.20669/0.50394) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|manor estate; sitelinks=1; wikidata:Q22939947 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 64 elements); data/traces/manoir-de-garaison-q22939947.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
