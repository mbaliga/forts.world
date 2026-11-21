# château de Cavagnac

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-cavagnac-q2968794` |
| Coordinates | 45.00776, 1.64056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.00776/1.64056)) |
| Wikidata | [Q2968794](https://www.wikidata.org/wiki/Q2968794) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Cavagnac |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 51 elements (outline 1, marker 1, road 13, waterway 1, zone 7, building 25, water 1, wall 2).

Evidence: documented 0, mapped 51, inferred 0, derived 0; heights documented 0, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/302196373 historic=castle Q2968794 6 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.00776/1.64056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=1; wikidata:Q2968794 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 51 elements); data/traces/chateau-de-cavagnac-q2968794.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
