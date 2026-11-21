# Fort M-Che

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-m-che-q9261629` |
| Coordinates | 52.1975, 21.0222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.1975/21.0222)) |
| Wikidata | [Q9261629](https://www.wikidata.org/wiki/Q9261629) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 325 elements (outline 1, marker 5, road 206, building 151, zone 46, wall 3).

Evidence: documented 0, mapped 325, inferred 0, derived 0; heights documented 118, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/967888185 historic=yes 72 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 151 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 206 mapped (trace size budget); minor lanes are not drawn
- origin moved 72 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.1975/21.0222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q9261629 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 325 elements); data/traces/fort-m-che-q9261629.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
