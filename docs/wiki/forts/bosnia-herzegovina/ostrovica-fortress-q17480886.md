# Ostrovica Fortress

> Bosnia & Herzegovina · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ostrovica-fortress-q17480886` |
| Coordinates | 44.558, 16.081 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.558/16.081)) |
| Wikidata | [Q17480886](https://www.wikidata.org/wiki/Q17480886) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|cultural heritage\|architectural heritage monument\|historic site\|cultural property\|historic building |
| Administrative area | Una-Sana Canton |
| Designations | National Monuments of Bosnia and Herzegovina |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 25 elements (outline 1, waterway 2, zone 1, road 5, building 12, retaining-wall 3).

Evidence: documented 0, mapped 25, inferred 0, derived 0; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/360909768 historic=castle Q17480886 5 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.558/16.081) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|cultural heritage\|architectural heritage monument\|historic site\|cultural property\|historic building; sitelinks=8; wikidata:Q17480886 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 25 elements); data/traces/ostrovica-fortress-q17480886.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bosnia-herzegovina.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
