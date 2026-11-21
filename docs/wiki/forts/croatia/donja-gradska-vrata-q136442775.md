# Donja gradska vrata

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `donja-gradska-vrata-q136442775` |
| Coordinates | 44.2416, 15.18206 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.2416/15.18206)) |
| Wikidata | [Q136442775](https://www.wikidata.org/wiki/Q136442775) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Nin |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 224 elements (outline 1, marker 2, road 73, building 118, zone 12, coastline 1, wall 10, retaining-wall 1, waterway 1, water 5).

Evidence: documented 0, mapped 224, inferred 0, derived 5; heights documented 7, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/388956775 historic=archaeological_site 243 m from ledger point
- origin moved 240 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":5,"medianInside":0,"medianOutside":0.2}
- sea-1: DEM check ok {"cells":6,"medianInside":0,"medianOutside":0.2}
- sea-2: DEM check ok {"cells":5,"medianInside":0,"medianOutside":0.2}
- sea-3: DEM check ok {"cells":25,"medianInside":0,"medianOutside":0.3}
- sea-4: DEM check failed {"cells":380,"medianInside":0.3,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.2416/15.18206) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q136442775 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 224 elements); data/traces/donja-gradska-vrata-q136442775.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
