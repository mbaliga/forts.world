# Kastel Fortress

> Bosnia & Herzegovina · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kastel-fortress-q21746176` |
| Coordinates | 44.76583, 17.18895 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.76583/17.18895)) |
| Wikidata | [Q21746176](https://www.wikidata.org/wiki/Q21746176) (CC0) |
| Wikidata class | fort |
| Types | fortress\|park |
| Administrative area | Banja Luka |
| Designations | National Monuments of Bosnia and Herzegovina |
| Wikipedia language editions | 19 |
| OSM `historic` | castle |
| OSM `castle_type` | castrum |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 360 elements (outline 1, marker 7, road 505, building 275, wall 13, waterway 4, zone 53, retaining-wall 10, water 1, cliff 1).

Evidence: documented 0, mapped 360, inferred 0, derived 0; heights documented 20, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1328804364 historic=castle Q21746176 135 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 275 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 505 mapped (trace size budget); minor lanes are not drawn
- origin moved 137 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.76583/17.18895) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|park; sitelinks=19; wikidata:Q21746176 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 360 elements); data/traces/kastel-fortress-q21746176.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bosnia-herzegovina.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
