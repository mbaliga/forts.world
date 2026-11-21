# Jubilee Battery

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jubilee-battery-q15931945` |
| Coordinates | 22.27499, 114.11718 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.27499/114.11718)) |
| Wikidata | [Q15931945](https://www.wikidata.org/wiki/Q15931945) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Hong Kong |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `ruins` | military |

## What the model contains

Tier **T1**, status `outline-only`, 47 elements (outline 1, marker 1, road 36, zone 2, building 4, coastline 2, water 1).

Evidence: documented 0, mapped 47, inferred 0, derived 1; heights documented 2, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1353274115 historic=ruins 1 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":174,"medianInside":3,"medianOutside":52.3}
- 58 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.27499/114.11718) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=2; wikidata:Q15931945 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 47 elements); data/traces/jubilee-battery-q15931945.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
