# Castello Branciforti

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-branciforti-q3662309` |
| Coordinates | 38.0564, 14.91125 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.0564/14.91125)) |
| Wikidata | [Q3662309](https://www.wikidata.org/wiki/Q3662309) (CC0) |
| Wikidata class | castle |
| Types | castle\|Category:Hohenstaufen castles in Southern Italy |
| Administrative area | Raccuja |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 372 elements (outline 1, marker 2, road 109, waterway 1, building 464, wall 210, retaining-wall 107).

Evidence: documented 0, mapped 372, inferred 0, derived 0; heights documented 0, inferred 0, unknown 290.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/678198731 historic=castle Q3662309 11 m from ledger point
- pruned to the outline plus 150 m: 894 -> 667 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 349 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 86 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.0564/14.91125) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|Category:Hohenstaufen castles in Southern Italy; sitelinks=2; wikidata:Q3662309 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 372 elements); data/traces/castello-branciforti-q3662309.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
