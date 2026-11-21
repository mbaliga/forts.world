# Grad Ablana

> Croatia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `grad-ablana-q98118759` |
| Coordinates | 44.70556, 14.89611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.70556/14.89611)) |
| Wikidata | [Q98118759](https://www.wikidata.org/wiki/Q98118759) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Senj |
| Inception | 1251 |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 102 elements (road 15, building 71, zone 9, coastline 1, cliff 2, retaining-wall 2, wall 1, water 1).

Evidence: documented 0, mapped 102, inferred 0, derived 1; heights documented 0, inferred 0, unknown 74.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":192,"medianInside":0,"medianOutside":17.4}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.70556/14.89611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q98118759 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 102 elements); data/traces/grad-ablana-q98118759.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
