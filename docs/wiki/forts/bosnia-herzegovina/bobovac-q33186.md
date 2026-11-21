# Bobovac

> Bosnia & Herzegovina · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bobovac-q33186` |
| Coordinates | 44.13668, 18.23805 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.13668/18.23805)) |
| Wikidata | [Q33186](https://www.wikidata.org/wiki/Q33186) (CC0) |
| Wikidata class | fort |
| Types | fortress\|cultural heritage\|old town\|historic site\|cultural property\|locality |
| Administrative area | Vareš |
| Inception | 1349 |
| Designations | National Monuments of Bosnia and Herzegovina |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 88 elements (outline 1, marker 1, zone 13, road 9, building 13, wall 12, retaining-wall 4, pit 20, water 1, waterway 3, cliff 11).

Evidence: documented 0, mapped 88, inferred 0, derived 0; heights documented 5, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14396277 historic=castle Q33186 36 m from ledger point
- origin moved 52 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.13668/18.23805) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|cultural heritage\|old town\|historic site\|cultural property\|locality; sitelinks=14; wikidata:Q33186 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 88 elements); data/traces/bobovac-q33186.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bosnia-herzegovina.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
