# Oddane Fort

> Norway · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oddane-fort-q11993152` |
| Coordinates | 58.96222, 9.85611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.96222/9.85611)) |
| Wikidata | [Q11993152](https://www.wikidata.org/wiki/Q11993152) (CC0) |
| Wikidata class | fort |
| Types | fort\|cultural property |
| Administrative area | Larvik |
| Inception | 1941 |
| Designations | cultural heritage preservation in Norway |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 54 elements (marker 1, coastline 3, building 17, road 29, water 4).

Evidence: documented 0, mapped 54, inferred 0, derived 3; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":12,"medianInside":0.8,"medianOutside":11.6}
- sea-1: DEM check ok {"cells":12,"medianInside":0,"medianOutside":11.6}
- sea-2: DEM check ok {"cells":1,"medianInside":0.1,"medianOutside":11.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.96222/9.85611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|cultural property; sitelinks=2; wikidata:Q11993152 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 54 elements); data/traces/oddane-fort-q11993152.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
