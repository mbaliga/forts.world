# Tower of Hercules

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-of-hercules-q245151` |
| Coordinates | 43.38583, -8.40639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.38583/-8.40639)) |
| Wikidata | [Q245151](https://www.wikidata.org/wiki/Q245151) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|lighthouse\|ancient lighthouse\|monument |
| Administrative area | A Coruña |
| Inception | 0100 |
| Designations | Red List of Endangered Heritage item\|bien de interés cultural\|World Heritage Site |
| UNESCO WHC id | 1312 |
| Wikipedia language editions | 53 |
| OSM `historic` | lighthouse |
| OSM `heritage` | 1 |
| OSM `website` | http://www.torredeherculesacoruna.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 89 elements (outline 1, marker 3, road 42, coastline 2, zone 8, building 8, wall 18, water 7).

Evidence: documented 0, mapped 89, inferred 0, derived 7; heights documented 20, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/255916025 historic=lighthouse Q245151 17 m from ledger point
- origin moved 16 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":400,"medianInside":20.1,"medianOutside":3.7}
- sea-1: DEM check failed {"cells":400,"medianInside":20.1,"medianOutside":3.7}
- sea-2: DEM check ok {"cells":8,"medianInside":-0.6,"medianOutside":19.6}
- sea-3: DEM check failed {"cells":0,"medianInside":null,"medianOutside":19.4}
- sea-4: DEM check ok {"cells":4,"medianInside":0,"medianOutside":19.5}
- sea-5: DEM check ok {"cells":51,"medianInside":0.1,"medianOutside":22.3}
- sea-6: DEM check failed {"cells":399,"medianInside":20.1,"medianOutside":3.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.38583/-8.40639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|lighthouse\|ancient lighthouse\|monument; sitelinks=53; wikidata:Q245151 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 90 elements); data/traces/tower-of-hercules-q245151.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 89 elements; outline osm:way/255916025 historic=lighthouse Q245151 17 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
