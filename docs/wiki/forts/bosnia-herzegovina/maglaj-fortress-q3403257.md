# Maglaj Fortress

> Bosnia & Herzegovina · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `maglaj-fortress-q3403257` |
| Coordinates | 44.54379, 18.10224 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.54379/18.10224)) |
| Wikidata | [Q3403257](https://www.wikidata.org/wiki/Q3403257) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress |
| Administrative area | Zenica-Doboj Canton |
| Designations | National Monuments of Bosnia and Herzegovina |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 278 elements (outline 1, road 43, zone 10, building 203, wall 9, retaining-wall 3, waterway 1, water 1, cliff 7).

Evidence: documented 0, mapped 278, inferred 0, derived 0; heights documented 1, inferred 0, unknown 214.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/16514459 historic=castle Q3403257 13 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- 33 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.54379/18.10224) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress; sitelinks=7; wikidata:Q3403257 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 278 elements); data/traces/maglaj-fortress-q3403257.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bosnia-herzegovina.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
