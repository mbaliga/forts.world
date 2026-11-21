# Fort Young

> Dominica · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-young-q124094861` |
| Coordinates | 15.29647, -61.38624 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/15.29647/-61.38624)) |
| Wikidata | [Q124094861](https://www.wikidata.org/wiki/Q124094861) (CC0) |
| Wikidata class | fort |
| Types | fort\|fortification |
| Inception | 1770 |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 344 elements (marker 3, road 70, zone 3, building 265, coastline 2, water 1).

Evidence: documented 0, mapped 344, inferred 0, derived 1; heights documented 22, inferred 0, unknown 243.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":78,"medianInside":3.8,"medianOutside":16.6}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/15.29647/-61.38624) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|fortification; sitelinks=1; wikidata:Q124094861 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 344 elements); data/traces/fort-young-q124094861.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/dominica.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
