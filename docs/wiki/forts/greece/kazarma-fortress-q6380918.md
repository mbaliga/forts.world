# Kazarma Fortress

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kazarma-fortress-q6380918` |
| Coordinates | 35.2111, 26.1075 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.2111/26.1075)) |
| Wikidata | [Q6380918](https://www.wikidata.org/wiki/Q6380918) (CC0) |
| Wikidata class | fort |
| Types | fortification\|fortress |
| Administrative area | Sitia Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 341 elements (outline 1, marker 1, road 102, coastline 1, water 2, zone 1, building 219, wall 13, retaining-wall 1).

Evidence: documented 0, mapped 341, inferred 0, derived 1; heights documented 1, inferred 0, unknown 232.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/94919839 historic=castle Q6380918 9 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":107,"medianInside":0.1,"medianOutside":39.9}
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.2111/26.1075) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|fortress; sitelinks=8; wikidata:Q6380918 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 341 elements); data/traces/kazarma-fortress-q6380918.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
