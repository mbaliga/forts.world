# Citadelle de Sisteron

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadelle-de-sisteron-q206260` |
| Coordinates | 44.19889, 5.94306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.19889/5.94306)) |
| Wikidata | [Q206260](https://www.wikidata.org/wiki/Q206260) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Sisteron |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `description` | Ticket office closes 1 hour before closing time. |
| OSM `ruins` | no |
| OSM `website` | https://www.citadelledesisteron.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 395 elements (outline 1, marker 8, road 356, zone 38, building 522, wall 48, waterway 4, retaining-wall 25, water 1).

Evidence: documented 0, mapped 395, inferred 0, derived 0; heights documented 1, inferred 0, unknown 192.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/538102668 historic=castle Q206260 17 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 522 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 356 mapped (trace size budget); minor lanes are not drawn
- origin moved 19 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.19889/5.94306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=3; wikidata:Q206260 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 395 elements); data/traces/citadelle-de-sisteron-q206260.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
