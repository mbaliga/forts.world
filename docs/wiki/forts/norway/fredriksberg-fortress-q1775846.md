# Fredriksberg Fortress

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fredriksberg-fortress-q1775846` |
| Coordinates | 60.3964, 5.3091 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.3964/5.3091)) |
| Wikidata | [Q1775846](https://www.wikidata.org/wiki/Q1775846) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Bergen Municipality |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |
| OSM `barrier` | retaining_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 2, road 336, coastline 5, zone 12, building 170, wall 5, water 5).

Evidence: documented 0, mapped 300, inferred 0, derived 5; heights documented 82, inferred 0, unknown 43.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/243640229 historic=fort Q1775846 33 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 170 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 336 mapped (trace size budget); minor lanes are not drawn
- origin moved 36 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":94,"medianInside":0,"medianOutside":17.8}
- sea-1: DEM check ok {"cells":4,"medianInside":0,"medianOutside":11.5}
- sea-2: DEM check ok {"cells":4,"medianInside":0,"medianOutside":11.5}
- sea-3: DEM check ok {"cells":4,"medianInside":0.6,"medianOutside":11.5}
- sea-4: DEM check failed {"cells":0,"medianInside":null,"medianOutside":11.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.3964/5.3091) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=5; wikidata:Q1775846 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 300 elements); data/traces/fredriksberg-fortress-q1775846.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
