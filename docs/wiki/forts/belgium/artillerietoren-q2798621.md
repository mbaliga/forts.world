# Artillerietoren

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `artillerietoren-q2798621` |
| Coordinates | 50.82889, 3.26798 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.82889/3.26798)) |
| Wikidata | [Q2798621](https://www.wikidata.org/wiki/Q2798621) (CC0) |
| Wikidata class | fort |
| Types | fort\|tower |
| Administrative area | Kortrijk |
| Designations | beschermd monument |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 345 elements (outline 1, marker 11, road 212, building 438, waterway 2, water 4, wall 41, retaining-wall 4, zone 12).

Evidence: documented 0, mapped 345, inferred 0, derived 0; heights documented 25, inferred 0, unknown 140.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/381291759 historic=fort Q2798621 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 438 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 212 mapped (trace size budget); minor lanes are not drawn
- 27 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.82889/3.26798) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|tower; sitelinks=2; wikidata:Q2798621 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 345 elements); data/traces/artillerietoren-q2798621.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
