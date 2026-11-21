# Montclar Castle

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `montclar-castle-q8342468` |
| Coordinates | 41.84754, 1.04198 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.84754/1.04198)) |
| Wikidata | [Q8342468](https://www.wikidata.org/wiki/Q8342468) (CC0) |
| Wikidata class | castle |
| Types | castle\|military hospital |
| Administrative area | Montclar d'Urgell |
| Inception | 1300 |
| Designations | bien de interés cultural\|Cultural Asset of National Interest |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `website` | http://www.castelldemontclar.com |

## What the model contains

Tier **T1**, status `outline+walls`, 202 elements (outline 1, road 64, building 129, wall 4, retaining-wall 3, zone 1).

Evidence: documented 0, mapped 202, inferred 0, derived 0; heights documented 128, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1385629675 historic=castle Q8342468 12 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.84754/1.04198) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|military hospital; sitelinks=4; wikidata:Q8342468 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 202 elements); data/traces/montclar-castle-q8342468.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
