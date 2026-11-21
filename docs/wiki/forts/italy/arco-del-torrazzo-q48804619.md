# Arco del Torrazzo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arco-del-torrazzo-q48804619` |
| Coordinates | 45.3629, 9.68684 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.3629/9.68684)) |
| Wikidata | [Q48804619](https://www.wikidata.org/wiki/Q48804619) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Crema |
| Wikipedia language editions | 4 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 154 elements (outline 1, marker 2, road 136, building 489, wall 28, zone 1).

Evidence: documented 0, mapped 154, inferred 0, derived 0; heights documented 4, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/197525618 historic=building Q48804619 5 m from ledger point
- pruned to the outline plus 150 m: 657 -> 353 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 248 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 91 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.3629/9.68684) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=4; wikidata:Q48804619 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 341 elements); data/traces/arco-del-torrazzo-q48804619.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 154 elements; outline osm:way/197525618 historic=building Q48804619 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
