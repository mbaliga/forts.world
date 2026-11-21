# Bastion Wiebego

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastion-wiebego-q56338318` |
| Coordinates | 54.34393, 18.64522 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.34393/18.64522)) |
| Wikidata | [Q56338318](https://www.wikidata.org/wiki/Q56338318) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|fortification\|bastion |
| Administrative area | Gdańsk |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `ruins` | fortification |

## What the model contains

Tier **T1**, status `outline+walls`, 280 elements (outline 1, marker 4, road 355, building 91, waterway 3, zone 7, retaining-wall 4, wall 19, cliff 1).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 65, inferred 0, unknown 49.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/969915646 historic=ruins Q56338318 3 m from ledger point
- roads capped: kept the 150 longest of 355 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.34393/18.64522) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|fortification\|bastion; sitelinks=1; wikidata:Q56338318 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 280 elements); data/traces/bastion-wiebego-q56338318.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
