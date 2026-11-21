# Fort Martello

> Indonesia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-martello-q122224442` |
| Coordinates | -6.02424, 106.74521 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-6.02424/106.74521)) |
| Wikidata | [Q122224442](https://www.wikidata.org/wiki/Q122224442) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Pulau Untung Jawa |
| Inception | 1850 |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 9 elements (outline 1, coastline 1, wall 1, building 5, road 1).

Evidence: documented 0, mapped 9, inferred 0, derived 0; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18873178 historic=ruins Q122224442 105 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 105 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-6.02424/106.74521) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q122224442 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 9 elements); data/traces/fort-martello-q122224442.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
