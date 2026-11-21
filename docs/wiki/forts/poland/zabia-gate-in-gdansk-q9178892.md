# Żabia Gate in Gdańsk

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zabia-gate-in-gdansk-q9178892` |
| Coordinates | 54.34731, 18.65139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.34731/18.65139)) |
| Wikidata | [Q9178892](https://www.wikidata.org/wiki/Q9178892) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Gdańsk |
| Wikipedia language editions | 2 |
| OSM `historic` | fortification |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, marker 4, road 341, building 138, zone 21, coastline 3, waterway 3, wall 7, retaining-wall 1, water 3).

Evidence: documented 0, mapped 313, inferred 0, derived 1; heights documented 89, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/96637644 historic=fortification Q557202 220 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 138 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 341 mapped (trace size budget); minor lanes are not drawn
- origin moved 221 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":4,"medianInside":-2.3,"medianOutside":5.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.34731/18.65139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q9178892 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/zabia-gate-in-gdansk-q9178892.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
