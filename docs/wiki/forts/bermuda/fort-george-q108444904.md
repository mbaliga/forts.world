# Fort George

> Bermuda · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-george-q108444904` |
| Coordinates | 32.38032, -64.68244 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.38032/-64.68244)) |
| Wikidata | [Q108444904](https://www.wikidata.org/wiki/Q108444904) (CC0) |
| Wikidata class | fort |
| Types | military base\|fort |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 147 elements (outline 1, marker 1, road 54, building 85, coastline 2, zone 2, water 2).

Evidence: documented 0, mapped 147, inferred 0, derived 1; heights documented 5, inferred 0, unknown 80.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/240668017 historic=fort 6 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":4,"medianInside":5.3,"medianOutside":33.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.38032/-64.68244) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; military base\|fort; sitelinks=1; wikidata:Q108444904 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 147 elements); data/traces/fort-george-q108444904.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bermuda.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
