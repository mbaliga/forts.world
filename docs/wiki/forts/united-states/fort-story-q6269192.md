# Fort Story

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-story-q6269192` |
| Coordinates | 36.9273, -76.0164 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.9273/-76.0164)) |
| Wikidata | [Q6269192](https://www.wikidata.org/wiki/Q6269192) (CC0) |
| Wikidata class | fort |
| Types | fort\|military base |
| Administrative area | Virginia Beach |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline-only`, 55 elements (outline 1, marker 1, road 37, coastline 2, building 12, retaining-wall 1, water 1).

Evidence: documented 0, mapped 55, inferred 0, derived 1; heights documented 6, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/402305569 historic=building 534 m from ledger point
- origin moved 534 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":188,"medianInside":1.3,"medianOutside":3.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.9273/-76.0164) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|military base; sitelinks=1; wikidata:Q6269192 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 55 elements); data/traces/fort-story-q6269192.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
