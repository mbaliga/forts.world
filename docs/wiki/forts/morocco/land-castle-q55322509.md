# Land Castle

> Morocco · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `land-castle-q55322509` |
| Coordinates | 32.2992, -9.2372 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.2992/-9.2372)) |
| Wikidata | [Q55322509](https://www.wikidata.org/wiki/Q55322509) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Safi |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 57 elements (outline 1, marker 2, coastline 1, building 16, wall 2, road 34, water 1).

Evidence: documented 0, mapped 57, inferred 0, derived 1; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/182854825 historic=castle 684 m from ledger point
- origin moved 684 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":173,"medianInside":0.6,"medianOutside":15.4}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.2992/-9.2372) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q55322509 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 57 elements); data/traces/land-castle-q55322509.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/morocco.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
