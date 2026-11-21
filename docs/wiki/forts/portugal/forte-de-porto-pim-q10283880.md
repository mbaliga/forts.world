# Forte de Porto Pim

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-porto-pim-q10283880` |
| Coordinates | 38.52588, -28.62655 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.52588/-28.62655)) |
| Wikidata | [Q10283880](https://www.wikidata.org/wiki/Q10283880) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Angústias |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 259 elements (outline 1, road 63, zone 7, building 405, retaining-wall 12, coastline 6, wall 45, water 3, cliff 2).

Evidence: documented 0, mapped 259, inferred 0, derived 1; heights documented 1, inferred 0, unknown 176.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/540276433 historic=fort Q10352074 181 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 405 mapped (trace size budget); the rest of the town is not drawn
- origin moved 180 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":122,"medianInside":0,"medianOutside":10.3}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.52588/-28.62655) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=2; wikidata:Q10283880 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 259 elements); data/traces/forte-de-porto-pim-q10283880.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
