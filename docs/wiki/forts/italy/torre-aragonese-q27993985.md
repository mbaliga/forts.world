# Torre aragonese

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-aragonese-q27993985` |
| Coordinates | 38.29761, 15.81292 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.29761/15.81292)) |
| Wikidata | [Q27993985](https://www.wikidata.org/wiki/Q27993985) (CC0) |
| Wikidata class | fort |
| Types | fort\|tower |
| Administrative area | Bagnara Calabra |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 14 elements (outline 1, coastline 1, building 1, road 6, wall 1, zone 2, water 2).

Evidence: documented 0, mapped 14, inferred 0, derived 2; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/294961828 historic=fort Q27993985 1 m from ledger point
- sea-0: DEM check ok {"cells":46,"medianInside":0,"medianOutside":0.1}
- sea-1: DEM check ok {"cells":161,"medianInside":0,"medianOutside":11.8}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.29761/15.81292) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|tower; sitelinks=1; wikidata:Q27993985 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 14 elements); data/traces/torre-aragonese-q27993985.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
