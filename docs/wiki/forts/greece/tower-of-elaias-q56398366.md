# Tower of Elaias

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-of-elaias-q56398366` |
| Coordinates | 36.74907, 22.79924 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.74907/22.79924)) |
| Wikidata | [Q56398366](https://www.wikidata.org/wiki/Q56398366) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|tower |
| Administrative area | Monemvasia Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 0 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 18 elements (outline 1, marker 1, coastline 6, road 8, water 2).

Evidence: documented 0, mapped 18, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/321127783 historic=ruins Q56398366 1 m from ledger point
- sea-0: DEM check ok {"cells":390,"medianInside":0,"medianOutside":2.6}
- sea-1: DEM check ok {"cells":211,"medianInside":0,"medianOutside":12.6}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.74907/22.79924) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|tower; sitelinks=0; wikidata:Q56398366 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 18 elements); data/traces/tower-of-elaias-q56398366.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
