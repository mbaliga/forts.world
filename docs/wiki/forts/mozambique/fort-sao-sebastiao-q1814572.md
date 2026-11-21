# Fort São Sebastião

> Mozambique · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-sao-sebastiao-q1814572` |
| Coordinates | -15.02892, 40.7438 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-15.02892/40.7438)) |
| Wikidata | [Q1814572](https://www.wikidata.org/wiki/Q1814572) (CC0) |
| Wikidata class | fort |
| Types | fortress\|cultural heritage |
| Administrative area | Island of Mozambique |
| Designations | part of UNESCO World Heritage Site\|Heritage of Portuguese Influence |
| Wikipedia language editions | 8 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 29 elements (outline 1, marker 1, coastline 1, road 9, building 14, water 3).

Evidence: documented 0, mapped 29, inferred 0, derived 2; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/206235094 historic=fort Q1814572 44 m from ledger point
- origin moved 40 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":14,"medianInside":6.7,"medianOutside":1.9}
- sea-1: DEM check ok {"cells":2402,"medianInside":0.8,"medianOutside":10.5}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-15.02892/40.7438) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|cultural heritage; sitelinks=8; wikidata:Q1814572 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 29 elements); data/traces/fort-sao-sebastiao-q1814572.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/mozambique.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
