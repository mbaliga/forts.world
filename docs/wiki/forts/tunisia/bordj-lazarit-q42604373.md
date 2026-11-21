# Bordj Lazarit

> Tunisia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bordj-lazarit-q42604373` |
| Coordinates | 37.16757, 10.17965 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.16757/10.17965)) |
| Wikidata | [Q42604373](https://www.wikidata.org/wiki/Q42604373) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Ghar el-Melh |
| Designations | listed monument of Tunisia |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 28 elements (outline 1, road 21, zone 2, wall 1, coastline 1, building 1, water 1).

Evidence: documented 0, mapped 28, inferred 0, derived 1; heights documented 1, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2314841 historic=castle 19 m from ledger point
- origin moved 22 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":393,"medianInside":0.8,"medianOutside":10.3}
- 24 DEM cells below -3 m (bathymetry) clamped to -3 m
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.16757/10.17965) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q42604373 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 28 elements); data/traces/bordj-lazarit-q42604373.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/tunisia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
