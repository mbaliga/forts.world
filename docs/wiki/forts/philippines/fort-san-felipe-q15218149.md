# Fort San Felipe

> Philippines · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-san-felipe-q15218149` |
| Coordinates | 14.48255, 120.9116 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/14.48255/120.9116)) |
| Wikidata | [Q15218149](https://www.wikidata.org/wiki/Q15218149) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Cavite City |
| Inception | 1609 |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 111 elements (outline 1, marker 5, road 23, building 73, zone 1, coastline 5, water 3).

Evidence: documented 0, mapped 111, inferred 0, derived 3; heights documented 0, inferred 0, unknown 73.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/404525071 historic=fort Q15218149 535 m from ledger point
- origin moved 537 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":88,"medianInside":6,"medianOutside":6.3}
- sea-1: DEM check ok {"cells":6,"medianInside":1.9,"medianOutside":6.2}
- sea-2: DEM check ok {"cells":21,"medianInside":4.5,"medianOutside":6.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/14.48255/120.9116) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q15218149 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 111 elements); data/traces/fort-san-felipe-q15218149.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/philippines.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
