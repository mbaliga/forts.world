# Wasserschloss Hofheim

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wasserschloss-hofheim-q19311379` |
| Coordinates | 50.0862, 8.44666 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.0862/8.44666)) |
| Wikidata | [Q19311379](https://www.wikidata.org/wiki/Q19311379) (CC0) |
| Wikidata class | castle |
| Types | castle\|yes\|building |
| Administrative area | Hofheim am Taunus |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `ruins` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 279 elements (outline 1, marker 1, road 269, waterway 3, building 382, retaining-wall 1, wall 2).

Evidence: documented 0, mapped 279, inferred 0, derived 0; heights documented 42, inferred 0, unknown 82.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/203601420 historic=castle Q19311379 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 382 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 269 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.0862/8.44666) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|yes\|building; sitelinks=2; wikidata:Q19311379 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 279 elements); data/traces/wasserschloss-hofheim-q19311379.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
