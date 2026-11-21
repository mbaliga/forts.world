# castle of Meung-sur-Loire

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-meung-sur-loire-q2969882` |
| Coordinates | 47.82323, 1.69429 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.82323/1.69429)) |
| Wikidata | [Q2969882](https://www.wikidata.org/wiki/Q2969882) (CC0) |
| Wikidata class | castle |
| Types | castle\|castle\|UNESCO\|château\|palace\|Historical Monument |
| Administrative area | Centre-Val de Loire |
| Inception | 810 |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | castle |
| OSM `heritage` | 2 |
| OSM `website` | https://www.chateau-de-meung.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 232 elements (outline 1, road 81, waterway 15, zone 14, building 308, wall 1).

Evidence: documented 0, mapped 232, inferred 0, derived 0; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/295665074 historic=castle Q2969882 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 308 mapped (trace size budget); the rest of the town is not drawn
- origin moved 22 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.82323/1.69429) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|castle\|UNESCO\|château\|palace\|Historical Monument; sitelinks=10; wikidata:Q2969882 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 232 elements); data/traces/castle-of-meung-sur-loire-q2969882.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
