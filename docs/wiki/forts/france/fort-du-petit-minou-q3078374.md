# Fort du Petit Minou

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-du-petit-minou-q3078374` |
| Coordinates | 48.33833, -4.61417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.33833/-4.61417)) |
| Wikidata | [Q3078374](https://www.wikidata.org/wiki/Q3078374) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Plouzané |
| Inception | 1694 |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 46 elements (outline 1, marker 1, building 7, road 24, coastline 1, zone 5, retaining-wall 3, waterway 3, water 1).

Evidence: documented 0, mapped 46, inferred 0, derived 1; heights documented 1, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/254099159 historic=fort Q3078374 33 m from ledger point
- origin moved 31 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":295,"medianInside":0,"medianOutside":25.6}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.33833/-4.61417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q3078374 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 46 elements); data/traces/fort-du-petit-minou-q3078374.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
