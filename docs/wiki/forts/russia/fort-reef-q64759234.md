# Fort Reef

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-reef-q64759234` |
| Coordinates | 60.03167, 29.63667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.03167/29.63667)) |
| Wikidata | [Q64759234](https://www.wikidata.org/wiki/Q64759234) (CC0) |
| Wikidata class | fort |
| Types | architectural landmark\|fort |
| Administrative area | Kronstadt |
| Inception | 1898 |
| Designations | part of UNESCO World Heritage Site\|federal cultural heritage site in Russia |
| UNESCO WHC id | 540-003a 2 |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `heritage` | 1 |
| OSM `website` | https://fortreef.ru |

## What the model contains

Tier **T1**, status `outline-only`, 36 elements (outline 1, marker 2, road 8, building 10, coastline 10, zone 1, retaining-wall 3, water 1).

Evidence: documented 0, mapped 36, inferred 0, derived 1; heights documented 5, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18806841 historic=fort Q64759234 44 m from ledger point
- origin moved 37 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":959,"medianInside":-3,"medianOutside":-3}
- 405 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.03167/29.63667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; architectural landmark\|fort; sitelinks=2; wikidata:Q64759234 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 36 elements); data/traces/fort-reef-q64759234.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
