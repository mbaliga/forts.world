# Inner Fjærnagen

> Norway · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `inner-fj-rnagen-q108708660` |
| Coordinates | 64.73107, 11.63168 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/64.73107/11.63168)) |
| Wikidata | [Q108708660](https://www.wikidata.org/wiki/Q108708660) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Nærøysund Municipality |
| Designations | cultural heritage preservation in Norway |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 8 elements (marker 1, coastline 1, waterway 2, building 2, water 2).

Evidence: documented 0, mapped 8, inferred 0, derived 2; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":53,"medianInside":0.2,"medianOutside":13.8}
- sea-1: DEM check ok {"cells":15,"medianInside":0.1,"medianOutside":13.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/64.73107/11.63168) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q108708660 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 8 elements); data/traces/inner-fj-rnagen-q108708660.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
