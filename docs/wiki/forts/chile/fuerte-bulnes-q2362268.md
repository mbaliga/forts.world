# Fuerte Bulnes

> Chile · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fuerte-bulnes-q2362268` |
| Coordinates | -53.63, -70.9183 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-53.63/-70.9183)) |
| Wikidata | [Q2362268](https://www.wikidata.org/wiki/Q2362268) (CC0) |
| Wikidata class | fort |
| Types | fort\|cultural property |
| Administrative area | Magellan and the Chilean Antarctic Region |
| Inception | 1843 |
| Designations | Historical Monument of Chile |
| Wikipedia language editions | 8 |
| OSM `historic` | fort |
| OSM `barrier` | fence |

## What the model contains

Tier **T1**, status `outline-only`, 59 elements (outline 1, marker 6, road 26, coastline 1, building 20, cliff 2, water 3).

Evidence: documented 0, mapped 59, inferred 0, derived 3; heights documented 1, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/548702549 historic=fort Q2362268 73 m from ledger point
- origin moved 77 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":2024,"medianInside":24.6,"medianOutside":4.9}
- sea-1: DEM check ok {"cells":109,"medianInside":7.1,"medianOutside":25.4}
- sea-2: DEM check ok {"cells":371,"medianInside":4.9,"medianOutside":26.9}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-53.63/-70.9183) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|cultural property; sitelinks=8; wikidata:Q2362268 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 59 elements); data/traces/fuerte-bulnes-q2362268.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/chile.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
