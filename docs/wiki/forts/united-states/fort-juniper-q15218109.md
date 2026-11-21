# Fort Juniper

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-juniper-q15218109` |
| Coordinates | 42.53365, -70.86514 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.53365/-70.86514)) |
| Wikidata | [Q15218109](https://www.wikidata.org/wiki/Q15218109) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 125 elements (road 15, coastline 2, building 106, zone 1, water 1).

Evidence: documented 0, mapped 125, inferred 0, derived 1; heights documented 0, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":269,"medianInside":0.4,"medianOutside":3.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.53365/-70.86514) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q15218109 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 125 elements); data/traces/fort-juniper-q15218109.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
