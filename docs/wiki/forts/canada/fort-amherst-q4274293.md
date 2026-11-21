# Fort Amherst

> Canada · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-amherst-q4274293` |
| Coordinates | 47.5636, -52.68044 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.5636/-52.68044)) |
| Wikidata | [Q4274293](https://www.wikidata.org/wiki/Q4274293) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | St. John's |
| Inception | 1813 |
| Designations | national historic site of Canada |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 31 elements (outline 1, marker 5, road 16, building 5, coastline 4).

Evidence: documented 0, mapped 31, inferred 0, derived 0; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/227052576 historic=fort 696 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 695 m from the ledger point to the outline centroid
- 9 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.5636/-52.68044) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q4274293 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 31 elements); data/traces/fort-amherst-q4274293.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
