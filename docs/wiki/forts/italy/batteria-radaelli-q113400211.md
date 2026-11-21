# Batteria Radaelli

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `batteria-radaelli-q113400211` |
| Coordinates | 45.45891, 12.50958 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.45891/12.50958)) |
| Wikidata | [Q113400211](https://www.wikidata.org/wiki/Q113400211) (CC0) |
| Wikidata class | fortification |
| Types | coastal battery |
| Administrative area | Cavallino-Treporti |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 155 elements (outline 1, zone 3, building 115, road 31, coastline 1, wall 3, water 1).

Evidence: documented 0, mapped 155, inferred 0, derived 1; heights documented 0, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/177299612 historic=yes Q113400211 2 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":3,"medianInside":0.1,"medianOutside":2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.45891/12.50958) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal battery; sitelinks=0; wikidata:Q113400211 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 155 elements); data/traces/batteria-radaelli-q113400211.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
