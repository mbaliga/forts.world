# Banff Castle

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `banff-castle-q81866530` |
| Coordinates | 57.66652, -2.5225 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.66652/-2.5225)) |
| Wikidata | [Q81866530](https://www.wikidata.org/wiki/Q81866530) (CC0) |
| Wikidata class | castle |
| Types | castle\|house\|motte |
| Administrative area | Aberdeenshire |
| Designations | scheduled monument |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `location-only`, 287 elements (marker 2, road 46, coastline 1, building 232, zone 5, water 1).

Evidence: documented 0, mapped 287, inferred 0, derived 1; heights documented 3, inferred 0, unknown 229.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":57,"medianInside":4.8,"medianOutside":21.5}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.66652/-2.5225) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|house\|motte; sitelinks=4; wikidata:Q81866530 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 287 elements); data/traces/banff-castle-q81866530.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
