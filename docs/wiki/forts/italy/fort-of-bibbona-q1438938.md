# Fort of Bibbona

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-bibbona-q1438938` |
| Coordinates | 43.23794, 10.52801 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.23794/10.52801)) |
| Wikidata | [Q1438938](https://www.wikidata.org/wiki/Q1438938) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Bibbona |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 16 elements (outline 1, coastline 1, road 9, building 4, water 1).

Evidence: documented 0, mapped 16, inferred 0, derived 1; heights documented 3, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/77672661 historic=fort 5 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":77,"medianInside":0,"medianOutside":6.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.23794/10.52801) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q1438938 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 16 elements); data/traces/fort-of-bibbona-q1438938.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
