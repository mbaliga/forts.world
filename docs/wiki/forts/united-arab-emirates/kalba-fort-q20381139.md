# Kalba Fort

> United Arab Emirates · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kalba-fort-q20381139` |
| Coordinates | 25.13472, 56.35528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.13472/56.35528)) |
| Wikidata | [Q20381139](https://www.wikidata.org/wiki/Q20381139) (CC0) |
| Wikidata class | castle |
| Types | castle\|military base |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `location-only`, 122 elements (road 76, building 42, zone 1, wall 1, coastline 1, water 1).

Evidence: documented 0, mapped 122, inferred 0, derived 1; heights documented 7, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":26,"medianInside":0.9,"medianOutside":3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.13472/56.35528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|military base; sitelinks=4; wikidata:Q20381139 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 122 elements); data/traces/kalba-fort-q20381139.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-arab-emirates.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
