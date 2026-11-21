# Verga fortification

> Greece · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `verga-fortification-q56476801` |
| Coordinates | 36.9994, 22.15703 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.9994/22.15703)) |
| Wikidata | [Q56476801](https://www.wikidata.org/wiki/Q56476801) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Kalamata Municipality |
| Inception | 1821 |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 17 elements (marker 1, coastline 1, road 13, water 2).

Evidence: documented 0, mapped 17, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":9,"medianInside":-0.1,"medianOutside":18.5}
- sea-1: DEM check ok {"cells":10,"medianInside":0,"medianOutside":18.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.9994/22.15703) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=0; wikidata:Q56476801 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 17 elements); data/traces/verga-fortification-q56476801.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
