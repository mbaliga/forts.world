# Bargate

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bargate-q4860547` |
| Coordinates | 50.9027, -1.40413 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.9027/-1.40413)) |
| Wikidata | [Q4860547](https://www.wikidata.org/wiki/Q4860547) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|city walls |
| Administrative area | City of Southampton |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, marker 4, road 224, building 181, wall 11, zone 15).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 17, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/27050359 historic=yes Q4860547 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 181 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 224 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.9027/-1.40413) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|city walls; sitelinks=5; wikidata:Q4860547 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/bargate-q4860547.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
