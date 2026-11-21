# Fort Pentagouet

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-pentagouet-q682161` |
| Coordinates | 44.38778, -68.79972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.38778/-68.79972)) |
| Wikidata | [Q682161](https://www.wikidata.org/wiki/Q682161) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Castine |
| Wikipedia language editions | 4 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline-only`, 33 elements (outline 1, road 15, coastline 1, building 14, water 1, waterway 1).

Evidence: documented 0, mapped 33, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1231385492 historic=monument 306 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 306 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.38778/-68.79972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q682161 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 33 elements); data/traces/fort-pentagouet-q682161.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
