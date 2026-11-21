# Antonine Wall

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `antonine-wall-q210957` |
| Coordinates | 55.967, -4.067 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.967/-4.067)) |
| Wikidata | [Q210957](https://www.wikidata.org/wiki/Q210957) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|Roman limes\|defense line\|Roman archaeological site |
| Administrative area | Scotland |
| Inception | 0142 |
| Designations | World Heritage Site |
| UNESCO WHC id | 430-008 |
| Wikipedia language editions | 52 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 430 |
| OSM `description` | A turf fortification on stone foundations, built by the Romans and representing the northernmost frontier barrier of the Roman Empire at the time. |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `location-only`, 83 elements (marker 4, road 65, water 4, waterway 9, building 1).

Evidence: documented 0, mapped 83, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3156625 historic=archaeological_site Q210957 3517 m from ledger point
- site is a site relation of 40 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (55076 x 10955 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.967/-4.067) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|Roman limes\|defense line\|Roman archaeological site; sitelinks=52; wikidata:Q210957 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 1 elements); data/traces/antonine-wall-q210957.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
