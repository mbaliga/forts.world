# Verny Fortress

> Kazakhstan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `verny-fortress-q60851909` |
| Coordinates | 43.27556, 76.96389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.27556/76.96389)) |
| Wikidata | [Q60851909](https://www.wikidata.org/wiki/Q60851909) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Almaty |
| Designations | cultural heritage ensemble |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `website` | https://vernoye-almaty.kz/monum/poyavit.shtml |

## What the model contains

Tier **T1**, status `outline+walls`, 270 elements (outline 1, marker 1, road 135, waterway 5, building 556, zone 2, wall 6).

Evidence: documented 0, mapped 270, inferred 0, derived 0; heights documented 1, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18227205 historic=ruins Q60851909 70 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 556 mapped (trace size budget); the rest of the town is not drawn
- origin moved 64 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.27556/76.96389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=2; wikidata:Q60851909 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 270 elements); data/traces/verny-fortress-q60851909.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/kazakhstan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
