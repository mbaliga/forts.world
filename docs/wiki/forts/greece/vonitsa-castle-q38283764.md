# Vonitsa Castle

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vonitsa-castle-q38283764` |
| Coordinates | 38.9202, 20.8852 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.9202/20.8852)) |
| Wikidata | [Q38283764](https://www.wikidata.org/wiki/Q38283764) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Aktio-Vonitsa Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 52 elements (outline 1, coastline 2, wall 3, road 35, retaining-wall 1, building 6, cliff 2, zone 1, water 1).

Evidence: documented 0, mapped 52, inferred 0, derived 1; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19110441 historic=castle Q38283764 92 m from ledger point
- origin moved 95 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":149,"medianInside":0,"medianOutside":10.9}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.9202/20.8852) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q38283764 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 52 elements); data/traces/vonitsa-castle-q38283764.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
