# Ribat Arzila

> Morocco · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ribat-arzila-q55359665` |
| Coordinates | 35.46609, -6.03776 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.46609/-6.03776)) |
| Wikidata | [Q55359665](https://www.wikidata.org/wiki/Q55359665) (CC0) |
| Wikidata class | fort |
| Types | fortress\|cultural heritage |
| Administrative area | Asilah |
| Designations | Moroccan cultural heritage\|Heritage of Portuguese Influence |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 126 elements (outline 1, marker 1, road 91, wall 10, coastline 1, building 21, water 1).

Evidence: documented 0, mapped 126, inferred 0, derived 1; heights documented 0, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1495739492 historic=fort 143 m from ledger point
- origin moved 143 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1,"medianInside":0.5,"medianOutside":12.2}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.46609/-6.03776) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|cultural heritage; sitelinks=1; wikidata:Q55359665 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 126 elements); data/traces/ribat-arzila-q55359665.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/morocco.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
