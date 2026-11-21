# Valtaki Fortress

> Greece · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `valtaki-fortress-q56398318` |
| Coordinates | 36.78479, 22.5788 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.78479/22.5788)) |
| Wikidata | [Q56398318](https://www.wikidata.org/wiki/Q56398318) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | East Mani municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 14 elements (marker 2, coastline 2, road 8, water 2).

Evidence: documented 0, mapped 14, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":52,"medianInside":0.6,"medianOutside":47}
- sea-1: DEM check failed {"cells":400,"medianInside":44.6,"medianOutside":0.8}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.78479/22.5788) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q56398318 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 14 elements); data/traces/valtaki-fortress-q56398318.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
