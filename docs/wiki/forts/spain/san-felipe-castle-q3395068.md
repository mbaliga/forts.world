# San Felipe Castle

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `san-felipe-castle-q3395068` |
| Coordinates | 43.4646, -8.28167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.4646/-8.28167)) |
| Wikidata | [Q3395068](https://www.wikidata.org/wiki/Q3395068) (CC0) |
| Wikidata class | castle |
| Types | castle\|architectural heritage monument in Bavaria |
| Administrative area | Ferrol |
| Inception | 1557 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 42 elements (outline 1, coastline 2, road 14, zone 3, building 20, wall 1, water 1).

Evidence: documented 0, mapped 42, inferred 0, derived 1; heights documented 0, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33711834 historic=castle Q3395068 26 m from ledger point
- origin moved 23 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":407,"medianInside":0,"medianOutside":27.4}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.4646/-8.28167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|architectural heritage monument in Bavaria; sitelinks=6; wikidata:Q3395068 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 42 elements); data/traces/san-felipe-castle-q3395068.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
