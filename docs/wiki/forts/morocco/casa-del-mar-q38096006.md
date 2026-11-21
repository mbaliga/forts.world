# Casa del Mar

> Morocco · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casa-del-mar-q38096006` |
| Coordinates | 27.94611, -12.93083 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/27.94611/-12.93083)) |
| Wikidata | [Q38096006](https://www.wikidata.org/wiki/Q38096006) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Tarfaya |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 64 elements (outline 1, coastline 1, road 27, building 28, wall 4, zone 2, water 1).

Evidence: documented 0, mapped 64, inferred 0, derived 1; heights documented 0, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1059489347 historic=fort 612 m from ledger point
- origin moved 613 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":53,"medianInside":0.3,"medianOutside":3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/27.94611/-12.93083) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=6; wikidata:Q38096006 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 64 elements); data/traces/casa-del-mar-q38096006.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/morocco.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
