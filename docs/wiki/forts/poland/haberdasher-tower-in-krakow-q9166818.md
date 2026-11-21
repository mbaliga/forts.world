# Haberdasher Tower in Kraków

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `haberdasher-tower-in-krakow-q9166818` |
| Coordinates | 50.0648, 19.9422 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.0648/19.9422)) |
| Wikidata | [Q9166818](https://www.wikidata.org/wiki/Q9166818) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Kraków |
| Designations | cultural property protection in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 225 elements (outline 1, marker 18, road 290, zone 92, wall 48, building 195, retaining-wall 2).

Evidence: documented 0, mapped 225, inferred 0, derived 0; heights documented 57, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/200814803 historic=fort Q9166818 6 m from ledger point
- pruned to the outline plus 150 m: 646 -> 324 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 80 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 159 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the outline centroid
- 69 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.0648/19.9422) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=3; wikidata:Q9166818 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 225 elements); data/traces/haberdasher-tower-in-krakow-q9166818.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
