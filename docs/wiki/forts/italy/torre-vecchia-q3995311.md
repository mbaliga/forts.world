# Torre Vecchia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-vecchia-q3995311` |
| Coordinates | 43.02012, 10.5234 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.02012/10.5234)) |
| Wikidata | [Q3995311](https://www.wikidata.org/wiki/Q3995311) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | San Vincenzo |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 20 elements (outline 1, road 7, waterway 4, building 4, coastline 3, water 1).

Evidence: documented 0, mapped 20, inferred 0, derived 1; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/187007608 historic=yes Q3995237 563 m from ledger point
- origin moved 565 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":2,"medianInside":5.2,"medianOutside":2.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.02012/10.5234) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=3; wikidata:Q3995311 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 20 elements); data/traces/torre-vecchia-q3995311.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
