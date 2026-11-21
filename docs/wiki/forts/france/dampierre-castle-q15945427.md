# Dampierre Castle

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dampierre-castle-q15945427` |
| Coordinates | 50.36591, 3.50688 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.36591/3.50688)) |
| Wikidata | [Q15945427](https://www.wikidata.org/wiki/Q15945427) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Anzin |
| Designations | part of UNESCO World Heritage Site\|monument historique inscrit |
| UNESCO WHC id | 1360-010 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 194 elements (outline 1, road 60, building 567, water 3, zone 5, retaining-wall 1, wall 4).

Evidence: documented 0, mapped 194, inferred 0, derived 0; heights documented 0, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/194762175 historic=castle Q15945427 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 567 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.36591/3.50688) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=3; wikidata:Q15945427 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 194 elements); data/traces/dampierre-castle-q15945427.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
