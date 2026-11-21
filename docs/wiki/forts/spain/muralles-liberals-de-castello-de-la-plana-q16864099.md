# Muralles Liberals de Castelló de la Plana

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralles-liberals-de-castello-de-la-plana-q16864099` |
| Coordinates | 39.9884, -0.03321 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.9884/-0.03321)) |
| Wikidata | [Q16864099](https://www.wikidata.org/wiki/Q16864099) (CC0) |
| Wikidata class | fortification |
| Types | monument\|city walls |
| Administrative area | Castellón de la Plana |
| Inception | 1837 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | monastery |

## What the model contains

Tier **T1**, status `outline+walls`, 263 elements (outline 1, marker 3, road 127, building 499, zone 2, waterway 1, water 2, wall 7).

Evidence: documented 0, mapped 263, inferred 0, derived 0; heights documented 0, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/186128279 historic=monastery 121 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 499 mapped (trace size budget); the rest of the town is not drawn
- origin moved 122 m from the ledger point to the outline centroid
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.9884/-0.03321) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; monument\|city walls; sitelinks=3; wikidata:Q16864099 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 263 elements); data/traces/muralles-liberals-de-castello-de-la-plana-q16864099.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
