# Castillo

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-q977675` |
| Coordinates | 37.91037, -6.81677 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.91037/-6.81677)) |
| Wikidata | [Q977675](https://www.wikidata.org/wiki/Q977675) (CC0) |
| Wikidata class | castle |
| Types | castle\|hermitage church |
| Administrative area | Cortegana |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `website` | https://www.castillodecortegana.net |

## What the model contains

Tier **T1**, status `outline+walls`, 148 elements (outline 1, road 48, wall 1, building 97, waterway 1).

Evidence: documented 0, mapped 148, inferred 0, derived 0; heights documented 0, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/180391375 historic=castle Q977675 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.91037/-6.81677) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|hermitage church; sitelinks=3; wikidata:Q977675 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 148 elements); data/traces/castillo-q977675.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
