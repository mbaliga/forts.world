# Casbah of Béjaïa

> Algeria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casbah-of-bejaia-q21511925` |
| Coordinates | 36.75149, 5.08381 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.75149/5.08381)) |
| Wikidata | [Q21511925](https://www.wikidata.org/wiki/Q21511925) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Béjaïa |
| Wikipedia language editions | 5 |
| OSM `historic` | fortress |
| OSM `heritage` | 2 |
| OSM `description` | Citadelle médiévale construite par les Almohades sur des bases hammadides, remaniée par les Espagnols et les Ottomans |

## What the model contains

Tier **T1**, status `outline+walls`, 269 elements (outline 1, marker 1, coastline 1, road 88, building 176, wall 1, water 1).

Evidence: documented 0, mapped 269, inferred 0, derived 1; heights documented 6, inferred 0, unknown 171.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/327666118 historic=fortress Q21511925 8 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":25,"medianInside":2.1,"medianOutside":11.6}
- 28 DEM cells below -3 m (bathymetry) clamped to -3 m
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.75149/5.08381) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q21511925 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 269 elements); data/traces/casbah-of-bejaia-q21511925.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/algeria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
