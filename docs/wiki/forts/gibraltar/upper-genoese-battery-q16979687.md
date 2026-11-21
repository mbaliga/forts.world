# Upper Genoese Battery

> Gibraltar · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `upper-genoese-battery-q16979687` |
| Coordinates | 36.13496, -5.34993 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.13496/-5.34993)) |
| Wikidata | [Q16979687](https://www.wikidata.org/wiki/Q16979687) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 373 elements (outline 1, marker 12, road 169, zone 6, building 158, coastline 2, wall 13, retaining-wall 6, water 6).

Evidence: documented 0, mapped 373, inferred 0, derived 4; heights documented 1, inferred 0, unknown 176.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/963314875 historic=fort Q7566249 320 m from ledger point
- origin moved 319 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":26,"medianInside":0,"medianOutside":10.8}
- sea-1: DEM check ok {"cells":4,"medianInside":-0.1,"medianOutside":10.4}
- sea-2: DEM check ok {"cells":1,"medianInside":-0.2,"medianOutside":10.3}
- sea-3: DEM check ok {"cells":57,"medianInside":0,"medianOutside":11.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.13496/-5.34993) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=1; wikidata:Q16979687 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 373 elements); data/traces/upper-genoese-battery-q16979687.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/gibraltar.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
