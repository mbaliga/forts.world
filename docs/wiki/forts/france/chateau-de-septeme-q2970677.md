# Château de Septème

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-septeme-q2970677` |
| Coordinates | 45.5508, 5.01083 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.5508/5.01083)) |
| Wikidata | [Q2970677](https://www.wikidata.org/wiki/Q2970677) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Septème |
| Designations | remarkable front garden\|classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 89 elements (outline 1, road 27, building 13, waterway 2, wall 2, zone 44).

Evidence: documented 0, mapped 89, inferred 0, derived 0; heights documented 2, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13479244 historic=castle Q2970677 3 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- 1189 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.5508/5.01083) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q2970677 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 89 elements); data/traces/chateau-de-septeme-q2970677.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
