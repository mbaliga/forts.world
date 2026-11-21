# Paço Episcopal de Faro

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `paco-episcopal-de-faro-q10346999` |
| Coordinates | 37.01401, -7.93502 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.01401/-7.93502)) |
| Wikidata | [Q10346999](https://www.wikidata.org/wiki/Q10346999) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|episcopal palace |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 267 elements (outline 1, marker 5, road 124, waterway 1, building 116, wall 13, zone 4, coastline 1, water 2).

Evidence: documented 0, mapped 267, inferred 0, derived 2; heights documented 9, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/182973009 historic=castle Q10346999 11 m from ledger point
- origin moved 9 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":381,"medianInside":7.8,"medianOutside":6.8}
- sea-1: DEM check ok {"cells":140,"medianInside":2.5,"medianOutside":9.9}
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.01401/-7.93502) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|episcopal palace; sitelinks=2; wikidata:Q10346999 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 267 elements); data/traces/paco-episcopal-de-faro-q10346999.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
