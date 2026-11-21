# Castle of Castelo de Vide

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-castelo-de-vide-q5049768` |
| Coordinates | 39.41777, -7.45794 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.41777/-7.45794)) |
| Wikidata | [Q5049768](https://www.wikidata.org/wiki/Q5049768) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Santa Maria da Devesa |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 333 elements (outline 1, marker 1, road 106, building 795, wall 103, zone 1).

Evidence: documented 0, mapped 333, inferred 0, derived 0; heights documented 0, inferred 0, unknown 224.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/16843065 historic=castle Q5049768 70 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 795 mapped (trace size budget); the rest of the town is not drawn
- origin moved 71 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.41777/-7.45794) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=6; wikidata:Q5049768 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 333 elements); data/traces/castle-of-castelo-de-vide-q5049768.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
