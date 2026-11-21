# Fort Amsterdam

> Indonesia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-amsterdam-q69138157` |
| Coordinates | 1.49253, 124.84026 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/1.49253/124.84026)) |
| Wikidata | [Q69138157](https://www.wikidata.org/wiki/Q69138157) (CC0) |
| Wikidata class | fort |
| Types | barracks\|fort |
| Administrative area | Manado |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 266 elements (marker 3, water 2, road 70, coastline 1, building 188, wall 1, waterway 1).

Evidence: documented 0, mapped 266, inferred 0, derived 0; heights documented 3, inferred 0, unknown 186.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/1.49253/124.84026) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; barracks\|fort; sitelinks=2; wikidata:Q69138157 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 266 elements); data/traces/fort-amsterdam-q69138157.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
