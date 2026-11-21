# Huaedondae

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `huaedondae-q19795061` |
| Coordinates | 37.60194, 126.48917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.60194/126.48917)) |
| Wikidata | [Q19795061](https://www.wikidata.org/wiki/Q19795061) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage\|dondae |
| Designations | Tangible cultural assets of Incheon Metropolitan City |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 17 elements (outline 1, coastline 1, road 13, wall 1, water 1).

Evidence: documented 0, mapped 17, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1047419438 historic=archaeological_site 94 m from ledger point
- origin moved 97 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":152,"medianInside":4.3,"medianOutside":24.1}
- 20 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.60194/126.48917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage\|dondae; sitelinks=1; wikidata:Q19795061 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 17 elements); data/traces/huaedondae-q19795061.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
