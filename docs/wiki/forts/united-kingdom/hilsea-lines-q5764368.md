# Hilsea Lines

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hilsea-lines-q5764368` |
| Coordinates | 50.83379, -1.06383 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.83379/-1.06383)) |
| Wikidata | [Q5764368](https://www.wikidata.org/wiki/Q5764368) (CC0) |
| Wikidata class | fortification |
| Types | defense line |
| Administrative area | City of Portsmouth |
| Inception | 1858 |
| Designations | scheduled monument |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 293 elements (outline 1, marker 4, road 201, water 4, building 199, coastline 2, retaining-wall 5, zone 7).

Evidence: documented 0, mapped 293, inferred 0, derived 2; heights documented 0, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14191929 historic=archaeological_site 70 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 199 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 201 mapped (trace size budget); minor lanes are not drawn
- origin moved 288 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":663,"medianInside":2.4,"medianOutside":2.5}
- sea-1: DEM check failed {"cells":1455,"medianInside":2.5,"medianOutside":2.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.83379/-1.06383) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defense line; sitelinks=3; wikidata:Q5764368 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 293 elements); data/traces/hilsea-lines-q5764368.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
