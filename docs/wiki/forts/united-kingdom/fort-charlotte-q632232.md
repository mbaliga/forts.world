# Fort Charlotte

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-charlotte-q632232` |
| Coordinates | 60.15536, -1.14436 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.15536/-1.14436)) |
| Wikidata | [Q632232](https://www.wikidata.org/wiki/Q632232) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Shetland Islands |
| Designations | scheduled monument |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 13, road 117, coastline 2, retaining-wall 2, building 156, wall 2, zone 11, water 3).

Evidence: documented 0, mapped 307, inferred 0, derived 3; heights documented 2, inferred 0, unknown 158.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/181491051 historic=fort Q632232 30 m from ledger point
- origin moved 30 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":529,"medianInside":9.6,"medianOutside":null}
- sea-1: DEM check ok {"cells":10,"medianInside":2.2,"medianOutside":9.7}
- sea-2: DEM check ok {"cells":128,"medianInside":2,"medianOutside":10.1}
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.15536/-1.14436) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=7; wikidata:Q632232 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/fort-charlotte-q632232.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
