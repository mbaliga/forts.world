# Südburg (Ḫattuša)

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sudburg-hattusa-q57614738` |
| Coordinates | 40.01319, 34.61925 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.01319/34.61925)) |
| Wikidata | [Q57614738](https://www.wikidata.org/wiki/Q57614738) (CC0) |
| Wikidata class | fort |
| Types | fortification\|archaeological site\|temple |
| Administrative area | Çorum Province |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 197 elements (outline 1, marker 1, road 2, waterway 1, wall 186, zone 5, cliff 1).

Evidence: documented 0, mapped 197, inferred 0, derived 0; heights documented 0, inferred 0, unknown 186.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1598209 historic=archaeological_site Q181007 421 m from ledger point
- origin moved 565 m from the ledger point to the outline centroid
- 5369 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.01319/34.61925) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|archaeological site\|temple; sitelinks=2; wikidata:Q57614738 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 197 elements); data/traces/sudburg-hattusa-q57614738.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
