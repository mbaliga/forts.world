# Ballycarbery Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ballycarbery-castle-q4185816` |
| Coordinates | 51.94886, -10.25866 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.94886/-10.25866)) |
| Wikidata | [Q4185816](https://www.wikidata.org/wiki/Q4185816) (CC0) |
| Wikidata class | castle |
| Types | castle\|destroyed building or structure |
| Administrative area | County Kerry |
| Wikipedia language editions | 6 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 15 elements (outline 1, coastline 3, road 5, building 3, water 3).

Evidence: documented 0, mapped 15, inferred 0, derived 3; heights documented 2, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/435370115 historic=ruins Q4185816 4 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":396,"medianInside":4.4,"medianOutside":4.7}
- sea-1: DEM check ok {"cells":100,"medianInside":2,"medianOutside":4.9}
- sea-2: DEM check ok {"cells":2,"medianInside":3.3,"medianOutside":4.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.94886/-10.25866) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|destroyed building or structure; sitelinks=6; wikidata:Q4185816 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 15 elements); data/traces/ballycarbery-castle-q4185816.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
