# Charlottenlund Fort

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `charlottenlund-fort-q4994660` |
| Coordinates | 55.7458, 12.5872 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.7458/12.5872)) |
| Wikidata | [Q4994660](https://www.wikidata.org/wiki/Q4994660) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Gentofte Municipality |
| Designations | monument on Kulturstyrelsen register |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 142 elements (outline 1, marker 13, road 75, building 50, coastline 1, zone 1, water 1).

Evidence: documented 0, mapped 142, inferred 0, derived 1; heights documented 0, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/4382289 historic=fort Q4994660 9 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":258,"medianInside":2,"medianOutside":5.6}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.7458/12.5872) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q4994660 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 142 elements); data/traces/charlottenlund-fort-q4994660.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
