# Rabenturm

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rabenturm-q38109357` |
| Coordinates | 47.81206, 16.23901 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.81206/16.23901)) |
| Wikidata | [Q38109357](https://www.wikidata.org/wiki/Q38109357) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Wiener Neustadt |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 242 elements (outline 1, marker 5, road 126, water 2, building 91, zone 8, wall 6, waterway 1, retaining-wall 2).

Evidence: documented 0, mapped 242, inferred 0, derived 0; heights documented 7, inferred 0, unknown 92.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1396218 historic=castle Q664071 549 m from ledger point
- origin moved 549 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.81206/16.23901) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=2; wikidata:Q38109357 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 242 elements); data/traces/rabenturm-q38109357.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
