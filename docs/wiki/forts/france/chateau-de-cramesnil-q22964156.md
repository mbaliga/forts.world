# château de Cramesnil

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-cramesnil-q22964156` |
| Coordinates | 49.08253, -0.28435 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.08253/-0.28435)) |
| Wikidata | [Q22964156](https://www.wikidata.org/wiki/Q22964156) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Saint-Aignan-de-Cramesnil |
| Inception | C16 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `description` | 12 cartes postales anciennes, lieu de mémoire des batailles de l'été 1944 |
| OSM `website` | https://www.commune-le-castelet.fr/s%C3%A9curit%C3%A9-sant%C3%A9-environnement/bien-vivre-ensemble/ |

## What the model contains

Tier **T1**, status `location-only`, 325 elements (marker 3, road 190, building 333, zone 37, wall 12, water 3).

Evidence: documented 0, mapped 325, inferred 0, derived 0; heights documented 38, inferred 0, unknown 94.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17045995 historic=yes 253 m from ledger point
- site is a route relation of 77 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1895 x 687 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 333 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 190 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.08253/-0.28435) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=1; wikidata:Q22964156 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 325 elements); data/traces/chateau-de-cramesnil-q22964156.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
