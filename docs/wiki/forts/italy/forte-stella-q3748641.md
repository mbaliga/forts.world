# Forte Stella

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-stella-q3748641` |
| Coordinates | 42.8159, 10.33361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.8159/10.33361)) |
| Wikidata | [Q3748641](https://www.wikidata.org/wiki/Q3748641) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Portoferraio |
| Inception | 1548 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 388 elements (outline 1, marker 5, road 180, building 127, wall 55, retaining-wall 16, zone 1, coastline 1, water 2).

Evidence: documented 0, mapped 388, inferred 0, derived 2; heights documented 7, inferred 0, unknown 191.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/577581193 historic=fort Q3748641 16 m from ledger point
- origin moved 15 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":187,"medianInside":0,"medianOutside":13.7}
- sea-1: DEM check ok {"cells":10,"medianInside":-0.4,"medianOutside":3}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.8159/10.33361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q3748641 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 388 elements); data/traces/forte-stella-q3748641.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
