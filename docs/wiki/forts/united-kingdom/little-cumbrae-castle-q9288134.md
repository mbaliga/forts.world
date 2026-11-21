# Little Cumbrae Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `little-cumbrae-castle-q9288134` |
| Coordinates | 55.7203, -4.94181 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.7203/-4.94181)) |
| Wikidata | [Q9288134](https://www.wikidata.org/wiki/Q9288134) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | North Ayrshire |
| Designations | scheduled monument\|category A listed building |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 24 elements (outline 1, marker 1, coastline 2, road 6, building 11, wall 1, water 2).

Evidence: documented 0, mapped 24, inferred 0, derived 2; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/842463335 historic=castle 69 m from ledger point
- origin moved 68 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":286,"medianInside":6,"medianOutside":14.6}
- sea-1: DEM check failed {"cells":362,"medianInside":6,"medianOutside":6}
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.7203/-4.94181) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=5; wikidata:Q9288134 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 24 elements); data/traces/little-cumbrae-castle-q9288134.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
