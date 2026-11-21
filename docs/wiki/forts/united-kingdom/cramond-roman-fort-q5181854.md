# Cramond Roman Fort

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cramond-roman-fort-q5181854` |
| Coordinates | 55.97712, -3.29735 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.97712/-3.29735)) |
| Wikidata | [Q5181854](https://www.wikidata.org/wiki/Q5181854) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|ancient Roman structure |
| Administrative area | City of Edinburgh |
| Designations | scheduled monument |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |
| OSM `description` | Roman Camp |
| OSM `ruins` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 323 elements (outline 1, coastline 3, road 120, waterway 2, water 3, building 165, zone 6, wall 18, retaining-wall 5).

Evidence: documented 0, mapped 323, inferred 0, derived 2; heights documented 90, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13968361 historic=archaeological_site Q5181854 128 m from ledger point
- origin moved 134 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":91,"medianInside":4.3,"medianOutside":19.2}
- sea-1: DEM check ok {"cells":79,"medianInside":4.1,"medianOutside":19}
- 21 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.97712/-3.29735) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|ancient Roman structure; sitelinks=4; wikidata:Q5181854 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 323 elements); data/traces/cramond-roman-fort-q5181854.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
