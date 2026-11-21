# Fort Patience

> Ghana · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-patience-q954593` |
| Coordinates | 5.28615, -0.72812 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/5.28615/-0.72812)) |
| Wikidata | [Q954593](https://www.wikidata.org/wiki/Q954593) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Central Region |
| Inception | 1697 |
| Designations | Ghana’s material cultural heritage\|part of UNESCO World Heritage Site |
| UNESCO WHC id | 34-003 |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline-only`, 35 elements (outline 1, coastline 1, road 2, building 30, water 1).

Evidence: documented 0, mapped 35, inferred 0, derived 1; heights documented 0, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/739731775 historic=castle Q954593 1 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":772,"medianInside":3.2,"medianOutside":10.6}
- 38 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/5.28615/-0.72812) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=10; wikidata:Q954593 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 35 elements); data/traces/fort-patience-q954593.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ghana.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
