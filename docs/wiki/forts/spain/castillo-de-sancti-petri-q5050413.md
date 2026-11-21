# Castillo de Sancti Petri

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-sancti-petri-q5050413` |
| Coordinates | 36.37975, -6.22007 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.37975/-6.22007)) |
| Wikidata | [Q5050413](https://www.wikidata.org/wiki/Q5050413) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower\|prison\|archaeological site |
| Administrative area | San Fernando |
| Designations | bien de interés cultural |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | wall |
| OSM `website` | https://elcastillodesanctipetri.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 14 elements (outline 1, zone 2, wall 1, building 5, coastline 2, road 1, water 1).

Evidence: documented 0, mapped 14, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/51041034 historic=castle Q5050413 12 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":523,"medianInside":0,"medianOutside":0}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.37975/-6.22007) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower\|prison\|archaeological site; sitelinks=6; wikidata:Q5050413 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 14 elements); data/traces/castillo-de-sancti-petri-q5050413.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
