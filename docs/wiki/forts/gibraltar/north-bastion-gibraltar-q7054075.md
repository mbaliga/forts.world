# North Bastion, Gibraltar

> Gibraltar · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `north-bastion-gibraltar-q7054075` |
| Coordinates | 36.14582, -5.35277 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.14582/-5.35277)) |
| Wikidata | [Q7054075](https://www.wikidata.org/wiki/Q7054075) (CC0) |
| Wikidata class | fort |
| Types | fort\|bastion |
| Administrative area | Gibraltar |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 353 elements (outline 1, marker 7, road 184, building 123, wall 21, retaining-wall 10, coastline 1, water 3, zone 1, cliff 2).

Evidence: documented 0, mapped 353, inferred 0, derived 1; heights documented 4, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/968308092 historic=fort Q7054075 8 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":15,"medianInside":0.1,"medianOutside":7.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.14582/-5.35277) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|bastion; sitelinks=4; wikidata:Q7054075 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 353 elements); data/traces/north-bastion-gibraltar-q7054075.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/gibraltar.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
