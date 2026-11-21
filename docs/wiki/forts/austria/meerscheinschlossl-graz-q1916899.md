# Meerscheinschlössl, Graz

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `meerscheinschlossl-graz-q1916899` |
| Coordinates | 47.07938, 15.44701 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.07938/15.44701)) |
| Wikidata | [Q1916899](https://www.wikidata.org/wiki/Q1916899) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|building |
| Administrative area | Graz |
| Inception | ~1580 |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 283 elements (outline 1, marker 2, road 301, zone 3, building 129, retaining-wall 1, wall 6).

Evidence: documented 0, mapped 283, inferred 0, derived 0; heights documented 68, inferred 0, unknown 59.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/93717253 historic=castle Q1916899 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 129 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 301 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.07938/15.44701) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|building; sitelinks=2; wikidata:Q1916899 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 283 elements); data/traces/meerscheinschlossl-graz-q1916899.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
