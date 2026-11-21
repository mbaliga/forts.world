# Santo António de Cascais Tower

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `santo-antonio-de-cascais-tower-q10383746` |
| Coordinates | 38.69392, -9.41948 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.69392/-9.41948)) |
| Wikidata | [Q10383746](https://www.wikidata.org/wiki/Q10383746) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Cascais |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, marker 5, coastline 2, road 207, retaining-wall 4, cliff 3, wall 10, building 281, water 8, zone 8, waterway 1).

Evidence: documented 0, mapped 313, inferred 0, derived 6; heights documented 4, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/22947630 historic=castle Q17390195 35 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 281 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 207 mapped (trace size budget); minor lanes are not drawn
- origin moved 33 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":9,"medianInside":0.7,"medianOutside":6.8}
- sea-1: DEM check ok {"cells":6,"medianInside":0,"medianOutside":6.9}
- sea-2: DEM check failed {"cells":890,"medianInside":7.2,"medianOutside":0}
- sea-3: DEM check ok {"cells":20,"medianInside":0.6,"medianOutside":7.6}
- sea-4: DEM check ok {"cells":148,"medianInside":0,"medianOutside":10.3}
- sea-5: DEM check ok {"cells":160,"medianInside":0,"medianOutside":10.7}
- 26 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.69392/-9.41948) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q10383746 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/santo-antonio-de-cascais-tower-q10383746.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
