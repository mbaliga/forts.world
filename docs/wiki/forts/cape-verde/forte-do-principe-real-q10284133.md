# Forte do Príncipe Real

> Cape Verde · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-do-principe-real-q10284133` |
| Coordinates | 16.56344, -24.27995 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/16.56344/-24.27995)) |
| Wikidata | [Q10284133](https://www.wikidata.org/wiki/Q10284133) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Ribeira Brava Municipality |
| Inception | 1818 |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `location-only`, 123 elements (coastline 1, road 14, waterway 3, building 91, cliff 2, wall 10, zone 1, water 1).

Evidence: documented 0, mapped 123, inferred 0, derived 1; heights documented 0, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":94,"medianInside":5.2,"medianOutside":43.4}
- 9 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/16.56344/-24.27995) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q10284133 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 123 elements); data/traces/forte-do-principe-real-q10284133.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/cape-verde.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
