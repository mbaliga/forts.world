# Jorel Battery

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jorel-battery-q43153281` |
| Coordinates | 37.53716, -1.11501 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.53716/-1.11501)) |
| Wikidata | [Q43153281](https://www.wikidata.org/wiki/Q43153281) (CC0) |
| Wikidata class | fort |
| Types | fort\|historical military facility |
| Administrative area | Cartagena |
| Inception | 1932 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `website` | https://www.rutasconhistoria.es/loc/bateria-militar-el-jorel |

## What the model contains

Tier **T1**, status `outline+walls`, 61 elements (outline 1, marker 3, road 11, coastline 1, zone 6, cliff 14, building 10, retaining-wall 6, wall 7, water 2).

Evidence: documented 0, mapped 61, inferred 0, derived 2; heights documented 0, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1561273147 historic=fort Q43153281 46 m from ledger point
- origin moved 45 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":264,"medianInside":0,"medianOutside":121.1}
- sea-1: DEM check ok {"cells":113,"medianInside":0,"medianOutside":105.1}
- 112 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.53716/-1.11501) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|historical military facility; sitelinks=1; wikidata:Q43153281 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 61 elements); data/traces/jorel-battery-q43153281.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
