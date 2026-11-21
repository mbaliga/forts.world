# Sverresborg

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sverresborg-q18342461` |
| Coordinates | 63.4196, 10.357 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/63.4196/10.357)) |
| Wikidata | [Q18342461](https://www.wikidata.org/wiki/Q18342461) (CC0) |
| Wikidata class | ruin |
| Types | fortification\|castle ruin |
| Administrative area | Trondheim municipality |
| Inception | 1182 |
| Designations | cultural heritage preservation in Norway |
| Wikipedia language editions | 7 |
| OSM `historic` | ruins |
| OSM `website` | https://sverresborg.no/borgen |

## What the model contains

Tier **T1**, status `outline+walls`, 212 elements (outline 1, marker 1, road 76, water 3, building 77, zone 43, wall 5, retaining-wall 4, cliff 1, waterway 1).

Evidence: documented 0, mapped 212, inferred 0, derived 0; heights documented 10, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/170162092 historic=ruins Q18342461 14 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/63.4196/10.357) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; fortification\|castle ruin; sitelinks=7; wikidata:Q18342461 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 212 elements); data/traces/sverresborg-q18342461.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
