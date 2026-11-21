# Torre San Leonardo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-san-leonardo-q105750942` |
| Coordinates | 40.80727, 17.53748 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.80727/17.53748)) |
| Wikidata | [Q105750942](https://www.wikidata.org/wiki/Q105750942) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Ostuni |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `description` | La torre di avvistamento in località Pilone denominata “San Leonardo” fu edificata sul terreno della chiesa omonima, a sua volta dipendente dal monastero dei Cavalieri Teutonici di San Leonardo presso Siponto. |

## What the model contains

Tier **T1**, status `outline+walls`, 96 elements (outline 1, road 18, coastline 2, building 71, wall 1, waterway 1, water 2).

Evidence: documented 0, mapped 96, inferred 0, derived 1; heights documented 1, inferred 0, unknown 71.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/421200075 historic=building Q105750942 6 m from ledger point
- island ring (464 m2) cut out of sea-0
- origin moved 5 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":238,"medianInside":0,"medianOutside":0.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.80727/17.53748) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=2; wikidata:Q105750942 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 96 elements); data/traces/torre-san-leonardo-q105750942.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
