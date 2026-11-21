# Blagaj Fortress

> Bosnia & Herzegovina · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `blagaj-fortress-q4923842` |
| Coordinates | 43.25997, 17.90233 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.25997/17.90233)) |
| Wikidata | [Q4923842](https://www.wikidata.org/wiki/Q4923842) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|architectural heritage monument\|cultural heritage\|historic site\|cultural property\|historic building |
| Administrative area | City of Mostar |
| Designations | National Monuments of Bosnia and Herzegovina |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 39 elements (outline 1, waterway 1, road 10, wall 2, building 8, retaining-wall 1, cliff 14, zone 2).

Evidence: documented 0, mapped 39, inferred 0, derived 0; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/16134226 historic=castle Q4923842 27 m from ledger point
- origin moved 35 m from the ledger point to the outline centroid
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.25997/17.90233) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|architectural heritage monument\|cultural heritage\|historic site\|cultural property\|historic building; sitelinks=13; wikidata:Q4923842 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 39 elements); data/traces/blagaj-fortress-q4923842.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bosnia-herzegovina.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
