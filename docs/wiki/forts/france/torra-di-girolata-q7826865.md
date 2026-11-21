# Torra di Girolata

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torra-di-girolata-q7826865` |
| Coordinates | 42.34763, 8.61258 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.34763/8.61258)) |
| Wikidata | [Q7826865](https://www.wikidata.org/wiki/Q7826865) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortin_genois\|Genoese towers in Corsica |
| Administrative area | Osani |
| Designations | monument selected by the  Mission d'Identification du Patrimoine Immobilier en Péril (2019)\|classified historical monument |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortin_genois |
| OSM `heritage` | 3 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 71 elements (outline 1, coastline 1, road 8, building 54, zone 3, waterway 1, wall 1, water 1).

Evidence: documented 0, mapped 71, inferred 0, derived 1; heights documented 1, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/226608019 historic=castle Q7826865 3 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":268,"medianInside":0,"medianOutside":3.3}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.34763/8.61258) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortin_genois\|Genoese towers in Corsica; sitelinks=5; wikidata:Q7826865 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 71 elements); data/traces/torra-di-girolata-q7826865.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
