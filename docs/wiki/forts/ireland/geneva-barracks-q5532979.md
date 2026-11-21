# Geneva Barracks

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `geneva-barracks-q5532979` |
| Coordinates | 52.21899, -6.98001 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.21899/-6.98001)) |
| Wikidata | [Q5532979](https://www.wikidata.org/wiki/Q5532979) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|barracks |
| Inception | 1783 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 51 elements (outline 1, road 16, coastline 1, building 28, wall 2, zone 2, water 1).

Evidence: documented 0, mapped 51, inferred 0, derived 1; heights documented 0, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/673728197 historic=castle Q5532979 33 m from ledger point
- origin moved 32 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":6,"medianInside":8.5,"medianOutside":36.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.21899/-6.98001) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|barracks; sitelinks=2; wikidata:Q5532979 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 51 elements); data/traces/geneva-barracks-q5532979.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
