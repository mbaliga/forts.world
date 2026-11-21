# Forte Cavour

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-cavour-q3748533` |
| Coordinates | 44.04225, 9.84596 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.04225/9.84596)) |
| Wikidata | [Q3748533](https://www.wikidata.org/wiki/Q3748533) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Porto Venere |
| Inception | 1857 |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 33 elements (outline 1, marker 1, coastline 1, road 16, building 9, zone 1, waterway 2, water 2).

Evidence: documented 0, mapped 33, inferred 0, derived 2; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11655163 historic=castle Q3748533 40 m from ledger point
- origin moved 28 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":8,"medianInside":-1.7,"medianOutside":136.3}
- sea-1: DEM check ok {"cells":9,"medianInside":0.1,"medianOutside":136.3}
- 25 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.04225/9.84596) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q3748533 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 33 elements); data/traces/forte-cavour-q3748533.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
