# Kasholmsskansen

> Sweden · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kasholmsskansen-q10544164` |
| Coordinates | 58.99, 17.62306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.99/17.62306)) |
| Wikidata | [Q10544164](https://www.wikidata.org/wiki/Q10544164) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 31 elements (road 9, zone 5, building 10, coastline 5, water 2).

Evidence: documented 0, mapped 31, inferred 0, derived 2; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":345,"medianInside":5.5,"medianOutside":6}
- sea-1: DEM check ok {"cells":251,"medianInside":4.6,"medianOutside":8.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.99/17.62306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=2; wikidata:Q10544164 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 31 elements); data/traces/kasholmsskansen-q10544164.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
