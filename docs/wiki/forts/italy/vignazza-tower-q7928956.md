# Vignazza Tower

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vignazza-tower-q7928956` |
| Coordinates | 37.82127, 15.26845 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.82127/15.26845)) |
| Wikidata | [Q7928956](https://www.wikidata.org/wiki/Q7928956) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Giardini Naxos |
| Inception | 1544 |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 67 elements (outline 1, coastline 1, road 23, waterway 1, zone 3, building 36, wall 1, water 1).

Evidence: documented 0, mapped 67, inferred 0, derived 1; heights documented 0, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20148687 historic=castle Q7431546 386 m from ledger point
- origin moved 386 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":40,"medianInside":0,"medianOutside":9.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.82127/15.26845) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=4; wikidata:Q7928956 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 67 elements); data/traces/vignazza-tower-q7928956.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
