# Casa Fuerte de Agaete

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casa-fuerte-de-agaete-q125750385` |
| Coordinates | 28.10462, -15.71009 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.10462/-15.71009)) |
| Wikidata | [Q125750385](https://www.wikidata.org/wiki/Q125750385) (CC0) |
| Wikidata class | fort |
| Types | fortified house |
| Administrative area | Agaete |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |
| OSM `historic` | ruins |
| OSM `ruins` | salt_pond |

## What the model contains

Tier **T1**, status `outline+walls`, 356 elements (outline 1, road 364, building 262, wall 25, waterway 1, water 8, retaining-wall 26, cliff 4, zone 19, coastline 2).

Evidence: documented 0, mapped 356, inferred 0, derived 2; heights documented 47, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1323145463 historic=ruins 121 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 262 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 364 mapped (trace size budget); minor lanes are not drawn
- origin moved 128 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":157,"medianInside":0,"medianOutside":18.7}
- sea-1: DEM check ok {"cells":24,"medianInside":0.3,"medianOutside":17.7}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.10462/-15.71009) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified house; sitelinks=0; wikidata:Q125750385 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 356 elements); data/traces/casa-fuerte-de-agaete-q125750385.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
