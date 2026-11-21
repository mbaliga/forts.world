# Corfu New Fortress

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `corfu-new-fortress-q603447` |
| Coordinates | 39.62531, 19.91681 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.62531/19.91681)) |
| Wikidata | [Q603447](https://www.wikidata.org/wiki/Q603447) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Municipality of Central Corfu and Diapontia Islands |
| Inception | 1572 |
| Designations | Protected monument\|archaeological site in Greece |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 179 elements (outline 1, marker 12, road 228, building 308, wall 105, retaining-wall 20, zone 37, coastline 1, water 3).

Evidence: documented 0, mapped 179, inferred 0, derived 0; heights documented 0, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1153908014 historic=castle 6 m from ledger point
- pruned to the outline plus 80 m: 715 -> 179 elements
- origin moved 5 m from the ledger point to the outline centroid
- 33 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.62531/19.91681) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=12; wikidata:Q603447 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/corfu-new-fortress-q603447.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
