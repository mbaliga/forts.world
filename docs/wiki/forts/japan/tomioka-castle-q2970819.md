# Tomioka Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tomioka-castle-q2970819` |
| Coordinates | 32.5289, 130.032 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.5289/130.032)) |
| Wikidata | [Q2970819](https://www.wikidata.org/wiki/Q2970819) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Reihoku |
| Inception | 1605 |
| Wikipedia language editions | 6 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 57 elements (outline 1, marker 3, waterway 1, road 23, coastline 2, water 2, building 16, retaining-wall 7, zone 2).

Evidence: documented 0, mapped 57, inferred 0, derived 1; heights documented 2, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1387811011 historic=archaeological_site 190 m from ledger point
- origin moved 191 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":129,"medianInside":0.3,"medianOutside":10.6}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.5289/130.032) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=6; wikidata:Q2970819 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 57 elements); data/traces/tomioka-castle-q2970819.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
