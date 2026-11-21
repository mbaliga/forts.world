# Falsterbohus

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `falsterbohus-q3431559` |
| Coordinates | 55.38623, 12.82923 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.38623/12.82923)) |
| Wikidata | [Q3431559](https://www.wikidata.org/wiki/Q3431559) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Vellinge Municipality |
| Inception | 1318 |
| Designations | monument in Fornminnesregistret |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 116 elements (outline 1, road 34, building 77, wall 1, zone 1, coastline 1, water 1).

Evidence: documented 0, mapped 116, inferred 0, derived 1; heights documented 0, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28524783 historic=castle Q3431559 5 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":33,"medianInside":1,"medianOutside":4.3}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.38623/12.82923) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=4; wikidata:Q3431559 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 116 elements); data/traces/falsterbohus-q3431559.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
