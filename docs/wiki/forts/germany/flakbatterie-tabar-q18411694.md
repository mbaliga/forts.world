# Flakbatterie Tabar

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `flakbatterie-tabar-q18411694` |
| Coordinates | 53.50579, 8.55339 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.50579/8.55339)) |
| Wikidata | [Q18411694](https://www.wikidata.org/wiki/Q18411694) (CC0) |
| Wikidata class | fortification |
| Types | anti-aircraft battery of the German Navy |
| Administrative area | Bremerhaven |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 6 elements (coastline 1, zone 2, road 2, water 1).

Evidence: documented 0, mapped 6, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":55,"medianInside":-1,"medianOutside":1.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.50579/8.55339) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; anti-aircraft battery of the German Navy; sitelinks=2; wikidata:Q18411694 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 6 elements); data/traces/flakbatterie-tabar-q18411694.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
