# walls of Porto Ercole

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `walls-of-porto-ercole-q3867306` |
| Coordinates | 42.39077, 11.20986 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.39077/11.20986)) |
| Wikidata | [Q3867306](https://www.wikidata.org/wiki/Q3867306) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Monte Argentario |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | city_wall |
| OSM `website` | https://www.argentarioturismo.it/esplora-argentario-maremma-toscana/esperienze-da-vivere-maremma/le-fortezze-argentario/la-rocca-aldobrandesca/ |

## What the model contains

Tier **T1**, status `outline+walls`, 176 elements (outline 1, marker 2, road 43, coastline 2, wall 7, zone 5, building 109, pit 1, cliff 1, water 4).

Evidence: documented 0, mapped 176, inferred 0, derived 4; heights documented 108, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/175145837 historic=castle Q3939430 199 m from ledger point
- origin moved 200 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":4,"medianInside":-1.8,"medianOutside":16.3}
- sea-1: DEM check ok {"cells":2,"medianInside":-1.4,"medianOutside":16}
- sea-2: DEM check ok {"cells":219,"medianInside":0,"medianOutside":32.7}
- sea-3: DEM check ok {"cells":45,"medianInside":0,"medianOutside":18.9}
- 20 DEM cells below -3 m (bathymetry) clamped to -3 m
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.39077/11.20986) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q3867306 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 176 elements); data/traces/walls-of-porto-ercole-q3867306.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
