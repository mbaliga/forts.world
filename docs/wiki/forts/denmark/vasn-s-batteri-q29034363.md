# Vasnæs Batteri

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vasn-s-batteri-q29034363` |
| Coordinates | 55.51752, 9.69715 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.51752/9.69715)) |
| Wikidata | [Q29034363](https://www.wikidata.org/wiki/Q29034363) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Administrative area | Middelfart Municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `description` | Kanonstilling der var i brug under Napoleonskrigen og 1. & 2. Slesvigske krig |

## What the model contains

Tier **T1**, status `outline-only`, 43 elements (outline 1, coastline 2, road 24, building 7, water 3, zone 1, waterway 5).

Evidence: documented 0, mapped 43, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/477238742 historic=archaeological_site Q29034363 13 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":147,"medianInside":6,"medianOutside":7.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.51752/9.69715) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=1; wikidata:Q29034363 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 43 elements); data/traces/vasn-s-batteri-q29034363.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
