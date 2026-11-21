# tour Blanche

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-blanche-q141959391` |
| Coordinates | 47.8989, 1.91318 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.8989/1.91318)) |
| Wikidata | [Q141959391](https://www.wikidata.org/wiki/Q141959391) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Orléans |
| Inception | 0400 |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 343 elements (outline 1, marker 1, road 192, waterway 3, building 687, water 1, wall 49, zone 16, retaining-wall 2).

Evidence: documented 0, mapped 343, inferred 0, derived 0; heights documented 49, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/113878987 historic=building Q22944517 164 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 687 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 192 mapped (trace size budget); minor lanes are not drawn
- origin moved 164 m from the ledger point to the centre of the mapped site
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.8989/1.91318) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q141959391 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 343 elements); data/traces/tour-blanche-q141959391.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
