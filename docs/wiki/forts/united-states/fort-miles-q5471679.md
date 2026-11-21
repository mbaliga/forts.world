# Fort Miles

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-miles-q5471679` |
| Coordinates | 38.78056, -75.09167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.78056/-75.09167)) |
| Wikidata | [Q5471679](https://www.wikidata.org/wiki/Q5471679) (CC0) |
| Wikidata class | fort |
| Types | historic district\|artillery fort |
| Administrative area | Delaware |
| Inception | 1940 |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 8 elements (road 6, zone 1, coastline 1).

Evidence: documented 0, mapped 8, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.78056/-75.09167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; historic district\|artillery fort; sitelinks=3; wikidata:Q5471679 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 8 elements); data/traces/fort-miles-q5471679.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
