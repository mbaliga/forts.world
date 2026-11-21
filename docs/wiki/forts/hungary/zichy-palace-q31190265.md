# Zichy Palace

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zichy-palace-q31190265` |
| Coordinates | 46.98903, 17.69895 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.98903/17.69895)) |
| Wikidata | [Q31190265](https://www.wikidata.org/wiki/Q31190265) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|palace\|château |
| Administrative area | Nagyvázsony |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |
| OSM `website` | https://kinizsivar.hu |

## What the model contains

Tier **T1**, status `outline+walls`, 196 elements (outline 1, road 43, waterway 2, building 140, wall 8, zone 1).

Evidence: documented 0, mapped 196, inferred 0, derived 0; heights documented 1, inferred 0, unknown 148.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/222896833 historic=castle Q1108883 511 m from ledger point
- origin moved 511 m from the ledger point to the centre of the mapped site
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.98903/17.69895) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|palace\|château; sitelinks=2; wikidata:Q31190265 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 196 elements); data/traces/zichy-palace-q31190265.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
