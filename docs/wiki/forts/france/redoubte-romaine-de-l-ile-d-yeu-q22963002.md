# Redoubte Romaine de l'Île-d'Yeu

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `redoubte-romaine-de-l-ile-d-yeu-q22963002` |
| Coordinates | 46.7021, -2.3789 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.7021/-2.3789)) |
| Wikidata | [Q22963002](https://www.wikidata.org/wiki/Q22963002) (CC0) |
| Wikidata class | fort |
| Types | redoubt |
| Administrative area | L'Île-d'Yeu |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | sconce |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 43 elements (outline 1, road 19, coastline 3, building 17, water 3).

Evidence: documented 0, mapped 43, inferred 0, derived 3; heights documented 1, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/341550042 historic=archaeological_site Q22963002 10 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":74,"medianInside":0,"medianOutside":9}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":8.2}
- sea-2: DEM check ok {"cells":63,"medianInside":0,"medianOutside":8.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.7021/-2.3789) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt; sitelinks=0; wikidata:Q22963002 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 43 elements); data/traces/redoubte-romaine-de-l-ile-d-yeu-q22963002.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
