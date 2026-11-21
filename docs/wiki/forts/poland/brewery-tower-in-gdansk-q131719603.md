# Brewery Tower in Gdańsk

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brewery-tower-in-gdansk-q131719603` |
| Coordinates | 54.34827, 18.64841 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.34827/18.64841)) |
| Wikidata | [Q131719603](https://www.wikidata.org/wiki/Q131719603) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Gdańsk |
| Inception | 1400 |
| Wikipedia language editions | 2 |
| OSM `historic` | fortification |

## What the model contains

Tier **T1**, status `outline+walls`, 349 elements (outline 1, marker 10, road 364, building 218, zone 36, waterway 1, wall 25, retaining-wall 6).

Evidence: documented 0, mapped 349, inferred 0, derived 0; heights documented 110, inferred 0, unknown 41.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/435276491 historic=fortification 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 218 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 364 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.34827/18.64841) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q131719603 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 349 elements); data/traces/brewery-tower-in-gdansk-q131719603.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
