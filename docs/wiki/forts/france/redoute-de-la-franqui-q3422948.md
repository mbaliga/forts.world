# Redoute de la Franqui

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `redoute-de-la-franqui-q3422948` |
| Coordinates | 42.92775, 3.04426 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.92775/3.04426)) |
| Wikidata | [Q3422948](https://www.wikidata.org/wiki/Q3422948) (CC0) |
| Wikidata class | fort |
| Types | fort\|lighthouse |
| Administrative area | Leucate |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 48 elements (outline 1, coastline 1, road 26, cliff 1, zone 3, building 12, wall 3, water 1).

Evidence: documented 0, mapped 48, inferred 0, derived 1; heights documented 1, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/254938971 historic=fort Q3422948 1 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":79,"medianInside":0,"medianOutside":45.3}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.92775/3.04426) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|lighthouse; sitelinks=2; wikidata:Q3422948 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 48 elements); data/traces/redoute-de-la-franqui-q3422948.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
