# Antirrio Fortress

> Greece · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `antirrio-fortress-q56259633` |
| Coordinates | 38.32804, 21.7655 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.32804/21.7655)) |
| Wikidata | [Q56259633](https://www.wikidata.org/wiki/Q56259633) (CC0) |
| Wikidata class | castle |
| Types | castle\|organized archaeological site |
| Administrative area | Nafpaktia Municipality |
| Inception | 1499 |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `location-only`, 132 elements (marker 1, road 40, wall 2, building 85, coastline 1, zone 2, water 1).

Evidence: documented 0, mapped 132, inferred 0, derived 1; heights documented 0, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":223,"medianInside":0,"medianOutside":0}
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.32804/21.7655) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|organized archaeological site; sitelinks=4; wikidata:Q56259633 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 132 elements); data/traces/antirrio-fortress-q56259633.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
