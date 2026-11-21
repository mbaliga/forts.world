# Flakbatterie Schweiburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `flakbatterie-schweiburg-q70873472` |
| Coordinates | 53.39694, 8.26417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.39694/8.26417)) |
| Wikidata | [Q70873472](https://www.wikidata.org/wiki/Q70873472) (CC0) |
| Wikidata class | fortification |
| Types | anti-aircraft battery of the German Navy |
| Administrative area | Jade |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 10 elements (outline 1, road 6, zone 1, waterway 2).

Evidence: documented 0, mapped 10, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/241770459 historic=ruins 547 m from ledger point
- origin moved 549 m from the ledger point to the centre of the mapped site
- 193 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.39694/8.26417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; anti-aircraft battery of the German Navy; sitelinks=1; wikidata:Q70873472 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 10 elements); data/traces/flakbatterie-schweiburg-q70873472.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
