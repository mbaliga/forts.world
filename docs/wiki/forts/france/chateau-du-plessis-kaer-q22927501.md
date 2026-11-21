# Château du Plessis-Kaër

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-du-plessis-kaer-q22927501` |
| Coordinates | 47.64464, -2.97561 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.64464/-2.97561)) |
| Wikidata | [Q22927501](https://www.wikidata.org/wiki/Q22927501) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Crac'h |
| Inception | 1600 |
| Designations | listed in the general inventory of cultural heritage\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 21 elements (outline 1, zone 5, building 10, waterway 1, road 2, coastline 1, water 1).

Evidence: documented 0, mapped 21, inferred 0, derived 1; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/93965024 historic=castle Q22927501 6 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":88,"medianInside":0,"medianOutside":16.4}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.64464/-2.97561) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q22927501 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 21 elements); data/traces/chateau-du-plessis-kaer-q22927501.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
