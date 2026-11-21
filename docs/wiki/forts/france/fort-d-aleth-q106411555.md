# Fort d'Aleth

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-d-aleth-q106411555` |
| Coordinates | 48.63734, -2.02983 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.63734/-2.02983)) |
| Wikidata | [Q106411555](https://www.wikidata.org/wiki/Q106411555) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Saint-Malo |
| Inception | 1759 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 177 elements (outline 1, marker 8, road 66, zone 19, building 56, coastline 2, waterway 1, wall 20, cliff 2, water 2).

Evidence: documented 0, mapped 177, inferred 0, derived 2; heights documented 6, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/54284375 historic=castle Q106411555 12 m from ledger point
- origin moved 13 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":36,"medianInside":0,"medianOutside":0.9}
- sea-1: DEM check ok {"cells":276,"medianInside":0,"medianOutside":19.5}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.63734/-2.02983) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=1; wikidata:Q106411555 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 177 elements); data/traces/fort-d-aleth-q106411555.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
