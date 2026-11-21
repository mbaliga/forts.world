# Fortim do Porto da Cruz

> Portugal · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortim-do-porto-da-cruz-q68114294` |
| Coordinates | 32.77458, -16.82716 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.77458/-16.82716)) |
| Wikidata | [Q68114294](https://www.wikidata.org/wiki/Q68114294) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Porto da Cruz |
| Designations | proposed Immovable Cultural Heritage of Municipal Interest\|Pending classification monument |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 116 elements (road 47, waterway 3, building 47, coastline 1, retaining-wall 10, wall 3, cliff 1, zone 1, water 3).

Evidence: documented 0, mapped 116, inferred 0, derived 3; heights documented 4, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":138,"medianInside":0,"medianOutside":7.3}
- sea-1: DEM check ok {"cells":54,"medianInside":0.1,"medianOutside":0.9}
- sea-2: DEM check failed {"cells":398,"medianInside":1.1,"medianOutside":0}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.77458/-16.82716) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=1; wikidata:Q68114294 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 116 elements); data/traces/fortim-do-porto-da-cruz-q68114294.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
