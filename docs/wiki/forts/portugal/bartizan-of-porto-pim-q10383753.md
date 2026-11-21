# Bartizan of Porto Pim

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bartizan-of-porto-pim-q10383753` |
| Coordinates | 38.52444, -28.63192 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.52444/-28.63192)) |
| Wikidata | [Q10383753](https://www.wikidata.org/wiki/Q10383753) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Angústias |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 361 elements (outline 1, road 49, building 252, retaining-wall 7, coastline 7, zone 2, water 4, wall 38, cliff 1).

Evidence: documented 0, mapped 361, inferred 0, derived 2; heights documented 3, inferred 0, unknown 294.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/204812279 historic=fort Q10284060 196 m from ledger point
- origin moved 194 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":249,"medianInside":0,"medianOutside":7.9}
- sea-1: DEM check ok {"cells":400,"medianInside":0.1,"medianOutside":3.3}
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.52444/-28.63192) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=3; wikidata:Q10383753 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 361 elements); data/traces/bartizan-of-porto-pim-q10383753.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
