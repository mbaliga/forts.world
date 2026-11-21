# Sea Castle

> Morocco · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sea-castle-q55322116` |
| Coordinates | 32.29744, -9.24422 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.29744/-9.24422)) |
| Wikidata | [Q55322116](https://www.wikidata.org/wiki/Q55322116) (CC0) |
| Wikidata class | castle |
| Types | castle\|heritage |
| Administrative area | Safi |
| Designations | Moroccan cultural heritage\|Heritage of Portuguese Influence |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 63 elements (outline 1, marker 2, coastline 1, building 19, wall 2, road 37, water 1).

Evidence: documented 0, mapped 63, inferred 0, derived 1; heights documented 0, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/182854825 historic=castle 35 m from ledger point
- origin moved 35 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":173,"medianInside":0.6,"medianOutside":15.4}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.29744/-9.24422) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|heritage; sitelinks=5; wikidata:Q55322116 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 63 elements); data/traces/sea-castle-q55322116.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/morocco.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
