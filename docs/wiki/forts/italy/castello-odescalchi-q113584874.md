# Castello Odescalchi

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-odescalchi-q113584874` |
| Coordinates | 42.03494, 11.87017 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.03494/11.87017)) |
| Wikidata | [Q113584874](https://www.wikidata.org/wiki/Q113584874) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Santa Marinella |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 153 elements (outline 1, road 74, building 66, wall 4, coastline 3, waterway 1, zone 2, water 2).

Evidence: documented 0, mapped 153, inferred 0, derived 2; heights documented 0, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/232866644 historic=castle Q113584874 13 m from ledger point
- origin moved 13 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":97,"medianInside":0,"medianOutside":7.7}
- sea-1: DEM check ok {"cells":59,"medianInside":0,"medianOutside":5.7}
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.03494/11.87017) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q113584874 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 153 elements); data/traces/castello-odescalchi-q113584874.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
