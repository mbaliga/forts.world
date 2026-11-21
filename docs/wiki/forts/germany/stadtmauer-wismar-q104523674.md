# Stadtmauer Wismar

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-wismar-q104523674` |
| Coordinates | 53.89123, 11.46338 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.89123/11.46338)) |
| Wikidata | [Q104523674](https://www.wikidata.org/wiki/Q104523674) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Wismar |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, marker 14, road 199, building 378, wall 40, zone 24, retaining-wall 6).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 40, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/97819840 historic=archaeological_site Q19681439 69 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 378 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 199 mapped (trace size budget); minor lanes are not drawn
- origin moved 69 m from the ledger point to the centre of the mapped site
- 185 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.89123/11.46338) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q104523674 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/stadtmauer-wismar-q104523674.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
