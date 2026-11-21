# Forte de Santana do Estreito

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-santana-do-estreito-q3078241` |
| Coordinates | -27.59333, -48.56389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-27.59333/-48.56389)) |
| Wikidata | [Q3078241](https://www.wikidata.org/wiki/Q3078241) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Florianópolis |
| Designations | heritage asset listed by IPHAN |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 74 elements (outline 1, marker 1, road 47, building 13, zone 3, coastline 8, water 1).

Evidence: documented 0, mapped 74, inferred 0, derived 1; heights documented 1, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/663542203 historic=fort 28 m from ledger point
- origin moved 27 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":245,"medianInside":4.8,"medianOutside":9.7}
- 33 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-27.59333/-48.56389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q3078241 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 74 elements); data/traces/forte-de-santana-do-estreito-q3078241.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
