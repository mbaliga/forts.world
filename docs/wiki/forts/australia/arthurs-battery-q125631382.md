# Arthurs Battery

> Australia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arthurs-battery-q125631382` |
| Coordinates | -32.05602, 115.74081 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-32.05602/115.74081)) |
| Wikidata | [Q125631382](https://www.wikidata.org/wiki/Q125631382) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | City of Fremantle |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `website` | https://www.fremantleroundhouse.com.au/ |

## What the model contains

Tier **T1**, status `outline+walls`, 344 elements (outline 1, marker 7, coastline 1, road 188, building 95, wall 9, cliff 5, retaining-wall 2, zone 33, waterway 1, water 2).

Evidence: documented 0, mapped 344, inferred 0, derived 1; heights documented 26, inferred 0, unknown 80.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/49965210 historic=archaeological_site 46 m from ledger point
- origin moved 46 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":69,"medianInside":1.3,"medianOutside":6.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-32.05602/115.74081) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=1; wikidata:Q125631382 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 344 elements); data/traces/arthurs-battery-q125631382.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/australia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
