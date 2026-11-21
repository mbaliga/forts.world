# Kopnena Vrata/Porta terraferma

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kopnena-vrata-porta-terraferma-q3908930` |
| Coordinates | 44.1121, 15.2285 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.1121/15.2285)) |
| Wikidata | [Q3908930](https://www.wikidata.org/wiki/Q3908930) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Zadar |
| Inception | 1537 |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 13, road 334, wall 19, coastline 5, zone 8, building 337, retaining-wall 2, water 3).

Evidence: documented 0, mapped 321, inferred 0, derived 3; heights documented 24, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/610822361 historic=fort 182 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 337 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 334 mapped (trace size budget); minor lanes are not drawn
- origin moved 186 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":450,"medianInside":0,"medianOutside":4}
- sea-1: DEM check ok {"cells":713,"medianInside":0,"medianOutside":4.2}
- sea-2: DEM check ok {"cells":4761,"medianInside":3.6,"medianOutside":null}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.1121/15.2285) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=7; wikidata:Q3908930 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/kopnena-vrata-porta-terraferma-q3908930.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
