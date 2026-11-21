# Ancient Portuguese citadel

> Morocco · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ancient-portuguese-citadel-q67181836` |
| Coordinates | 33.25644, -8.50276 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.25644/-8.50276)) |
| Wikidata | [Q67181836](https://www.wikidata.org/wiki/Q67181836) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | El Jadida |
| Designations | Moroccan cultural heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 376 elements (outline 1, marker 29, road 193, zone 6, building 449, wall 64, water 4, coastline 2).

Evidence: documented 0, mapped 376, inferred 0, derived 3; heights documented 0, inferred 0, unknown 184.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1267677369 historic=castle 25 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 449 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 193 mapped (trace size budget); minor lanes are not drawn
- origin moved 26 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":14,"medianInside":5,"medianOutside":6}
- sea-1: DEM check ok {"cells":34,"medianInside":-0.1,"medianOutside":6.2}
- sea-2: DEM check failed {"cells":400,"medianInside":6.2,"medianOutside":2}
- 13 DEM cells below -3 m (bathymetry) clamped to -3 m
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.25644/-8.50276) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=1; wikidata:Q67181836 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 376 elements); data/traces/ancient-portuguese-citadel-q67181836.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/morocco.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
