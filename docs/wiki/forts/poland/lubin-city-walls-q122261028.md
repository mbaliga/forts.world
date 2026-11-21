# Lubin City Walls

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lubin-city-walls-q122261028` |
| Coordinates | 51.39818, 16.2056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.39818/16.2056)) |
| Wikidata | [Q122261028](https://www.wikidata.org/wiki/Q122261028) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Lubin |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |
| OSM `website` | https://nspjlubin.salezjanie.pl/ |

## What the model contains

Tier **T1**, status `outline+walls`, 279 elements (outline 1, marker 1, road 167, building 91, zone 9, wall 6, waterway 4).

Evidence: documented 0, mapped 279, inferred 0, derived 0; heights documented 80, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/99483250 historic=yes Q11745374 312 m from ledger point
- origin moved 312 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.39818/16.2056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q122261028 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 279 elements); data/traces/lubin-city-walls-q122261028.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
