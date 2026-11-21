# Emo Battery

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `emo-battery-q113401323` |
| Coordinates | 45.3948, 12.35819 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.3948/12.35819)) |
| Wikidata | [Q113401323](https://www.wikidata.org/wiki/Q113401323) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Venice |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |
| OSM `website` | https://www.fortificazioni.net/batterie/CASABIAN.htm |

## What the model contains

Tier **T1**, status `location-only`, 186 elements (marker 1, road 29, building 78, wall 69, water 4, waterway 2, coastline 1, zone 2).

Evidence: documented 0, mapped 186, inferred 0, derived 3; heights documented 0, inferred 0, unknown 147.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11785442 historic=fort 56 m from ledger point
- site is a site relation of 15 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (88 x 145 m)
- origin moved 41 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":2,"medianInside":0,"medianOutside":1}
- sea-1: DEM check ok {"cells":151,"medianInside":0,"medianOutside":1.6}
- sea-2: DEM check ok {"cells":3,"medianInside":0.2,"medianOutside":1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.3948/12.35819) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=0; wikidata:Q113401323 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 186 elements); data/traces/emo-battery-q113401323.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
