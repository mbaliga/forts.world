# Fort Charlotte

> St. Vincent & Grenadines · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-charlotte-q28448431` |
| Coordinates | 13.15789, -61.24211 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/13.15789/-61.24211)) |
| Wikidata | [Q28448431](https://www.wikidata.org/wiki/Q28448431) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Saint George Parish |
| Inception | 1763 |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 30 elements (outline 1, road 7, coastline 1, zone 1, building 20).

Evidence: documented 0, mapped 30, inferred 0, derived 0; heights documented 0, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/850584945 historic=fort Q28448431 28 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 25 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/13.15789/-61.24211) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q28448431 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 30 elements); data/traces/fort-charlotte-q28448431.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/st-vincent-grenadines.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
