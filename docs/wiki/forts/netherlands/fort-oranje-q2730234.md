# Fort Oranje

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-oranje-q2730234` |
| Coordinates | 17.48192, -62.98649 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/17.48192/-62.98649)) |
| Wikidata | [Q2730234](https://www.wikidata.org/wiki/Q2730234) (CC0) |
| Wikidata class | fort |
| Types | fort\|monument\|fort |
| Administrative area | Sint Eustatius |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 11, road 80, building 146, wall 15, zone 23, coastline 1, waterway 16, cliff 2, retaining-wall 3, water 1).

Evidence: documented 0, mapped 299, inferred 0, derived 1; heights documented 1, inferred 0, unknown 163.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/275387965 historic=fort Q2730234 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":89,"medianInside":1.9,"medianOutside":44.5}
- 28 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/17.48192/-62.98649) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|monument\|fort; sitelinks=7; wikidata:Q2730234 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/fort-oranje-q2730234.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
