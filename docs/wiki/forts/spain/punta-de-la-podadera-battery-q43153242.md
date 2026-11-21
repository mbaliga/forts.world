# Punta de la Podadera Battery

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `punta-de-la-podadera-battery-q43153242` |
| Coordinates | 37.58183, -0.98936 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.58183/-0.98936)) |
| Wikidata | [Q43153242](https://www.wikidata.org/wiki/Q43153242) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|historical military facility |
| Administrative area | Cartagena |
| Inception | 1800 |
| Designations | Red List of Endangered Heritage item\|bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 19 elements (outline 1, building 2, road 11, coastline 3, wall 1, water 1).

Evidence: documented 0, mapped 19, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/50824436 historic=castle Q21968145 525 m from ledger point
- origin moved 524 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":228,"medianInside":0,"medianOutside":10.9}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.58183/-0.98936) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|historical military facility; sitelinks=1; wikidata:Q43153242 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 19 elements); data/traces/punta-de-la-podadera-battery-q43153242.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
