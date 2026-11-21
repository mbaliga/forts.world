# Tower of Montrichard

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-of-montrichard-q22994423` |
| Coordinates | 47.34364, 1.18343 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.34364/1.18343)) |
| Wikidata | [Q22994423](https://www.wikidata.org/wiki/Q22994423) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Montrichard Val de Cher |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, marker 5, road 152, zone 3, waterway 3, wall 10, building 433, retaining-wall 5).

Evidence: documented 0, mapped 297, inferred 0, derived 0; heights documented 1, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5340581 historic=castle Q947645 214 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 433 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 152 mapped (trace size budget); minor lanes are not drawn
- origin moved 214 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.34364/1.18343) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=0; wikidata:Q22994423 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/tower-of-montrichard-q22994423.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
