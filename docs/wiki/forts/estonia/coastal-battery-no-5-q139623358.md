# Coastal Battery No. 5

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `coastal-battery-no-5-q139623358` |
| Coordinates | 59.59501, 24.51948 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.59501/24.51948)) |
| Wikidata | [Q139623358](https://www.wikidata.org/wiki/Q139623358) (CC0) |
| Wikidata class | fortification |
| Types | coastal battery |
| Administrative area | Viimsi Rural Municipality |
| Designations | architectural monument |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 18 elements (outline 1, marker 1, coastline 2, road 13, water 1).

Evidence: documented 0, mapped 18, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/224961849 historic=fort 32 m from ledger point
- origin moved 51 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":262,"medianInside":7.1,"medianOutside":22.3}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.59501/24.51948) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal battery; sitelinks=0; wikidata:Q139623358 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 18 elements); data/traces/coastal-battery-no-5-q139623358.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
