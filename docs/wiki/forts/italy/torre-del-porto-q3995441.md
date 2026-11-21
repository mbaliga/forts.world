# Torre del Porto

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-porto-q3995441` |
| Coordinates | 43.05054, 9.84222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.05054/9.84222)) |
| Wikidata | [Q3995441](https://www.wikidata.org/wiki/Q3995441) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|tower |
| Administrative area | Capraia Isola |
| Inception | 1516 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 76 elements (outline 1, road 22, building 44, coastline 4, zone 1, water 4).

Evidence: documented 0, mapped 76, inferred 0, derived 4; heights documented 0, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/97550066 historic=ruins Q3995441 0 m from ledger point
- sea-0: DEM check failed {"cells":2,"medianInside":1.1,"medianOutside":0}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":0}
- sea-2: DEM check failed {"cells":0,"medianInside":null,"medianOutside":0}
- sea-3: DEM check ok {"cells":186,"medianInside":0,"medianOutside":11.4}
- 18 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.05054/9.84222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|tower; sitelinks=3; wikidata:Q3995441 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 76 elements); data/traces/torre-del-porto-q3995441.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
