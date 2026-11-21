# Castelletto di Miramare

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castelletto-di-miramare-q136549340` |
| Coordinates | 45.70483, 13.712 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.70483/13.712)) |
| Wikidata | [Q136549340](https://www.wikidata.org/wiki/Q136549340) (CC0) |
| Wikidata class | castle |
| Types | castle\|historic building |
| Administrative area | Trieste |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://miramare.cultura.gov.it/il-castello/ |

## What the model contains

Tier **T1**, status `outline+walls`, 129 elements (outline 1, marker 2, road 95, building 1, zone 20, waterway 4, coastline 1, retaining-wall 2, wall 1, water 2).

Evidence: documented 0, mapped 129, inferred 0, derived 2; heights documented 1, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/361092895 historic=castle Q165069 259 m from ledger point
- origin moved 260 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":400,"medianInside":0,"medianOutside":15.6}
- sea-1: DEM check ok {"cells":270,"medianInside":0,"medianOutside":17.3}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.70483/13.712) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|historic building; sitelinks=2; wikidata:Q136549340 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 129 elements); data/traces/castelletto-di-miramare-q136549340.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
