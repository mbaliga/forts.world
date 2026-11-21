# Widerstandsnest 60

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `widerstandsnest-60-q1878743` |
| Coordinates | 49.35668, -0.83208 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.35668/-0.83208)) |
| Wikidata | [Q1878743](https://www.wikidata.org/wiki/Q1878743) (CC0) |
| Wikidata class | fortification |
| Types | defence work |
| Administrative area | Colleville-sur-Mer |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 39 elements (outline 1, road 16, building 15, zone 5, coastline 1, water 1).

Evidence: documented 0, mapped 39, inferred 0, derived 1; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1061082949 historic=yes Q1878743 48 m from ledger point
- origin moved 50 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":48,"medianInside":0,"medianOutside":48.7}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.35668/-0.83208) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defence work; sitelinks=3; wikidata:Q1878743 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 39 elements); data/traces/widerstandsnest-60-q1878743.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
