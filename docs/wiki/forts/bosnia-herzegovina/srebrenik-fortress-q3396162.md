# Srebrenik Fortress

> Bosnia & Herzegovina · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `srebrenik-fortress-q3396162` |
| Coordinates | 44.70364, 18.53137 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.70364/18.53137)) |
| Wikidata | [Q3396162](https://www.wikidata.org/wiki/Q3396162) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Tuzla Canton |
| Designations | National Monuments of Bosnia and Herzegovina |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `fortification_type` | castle |
| OSM `heritage` | 2 |
| OSM `barrier` | castle_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 69 elements (outline 1, road 17, zone 5, building 8, wall 6, cliff 31, retaining-wall 1).

Evidence: documented 0, mapped 69, inferred 0, derived 0; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20681514 historic=castle Q3396162 27 m from ledger point
- origin moved 23 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.70364/18.53137) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=12; wikidata:Q3396162 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 69 elements); data/traces/srebrenik-fortress-q3396162.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bosnia-herzegovina.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
