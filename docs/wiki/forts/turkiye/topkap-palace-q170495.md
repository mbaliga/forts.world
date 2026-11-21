# Topkapı Palace

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `topkap-palace-q170495` |
| Coordinates | 41.01281, 28.98402 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.01281/28.98402)) |
| Wikidata | [Q170495](https://www.wikidata.org/wiki/Q170495) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|museum\|building or structure under construction |
| Administrative area | Istanbul |
| Inception | 1460 |
| Wikipedia language editions | 79 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://muze.gen.tr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, marker 9, road 152, building 135, wall 10, retaining-wall 7, water 9, zone 16, coastline 1).

Evidence: documented 0, mapped 340, inferred 0, derived 2; heights documented 10, inferred 0, unknown 142.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/335415778 historic=castle Q170495 52 m from ledger point
- origin moved 50 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":18,"medianInside":0.3,"medianOutside":27.6}
- sea-1: DEM check ok {"cells":33,"medianInside":0.3,"medianOutside":27.8}
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.01281/28.98402) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|museum\|building or structure under construction; sitelinks=79; wikidata:Q170495 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 340 elements); data/traces/topkap-palace-q170495.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
