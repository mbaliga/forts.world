# Élysée Palace

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `elysee-palace-q188190` |
| Coordinates | 48.87038, 2.31661 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.87038/2.31661)) |
| Wikidata | [Q188190](https://www.wikidata.org/wiki/Q188190) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|official residence\|city palace |
| Administrative area | 8th arrondissement of Paris |
| Inception | 1722 |
| Designations | classified historical monument |
| Wikipedia language editions | 66 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Résidence officielle du président de la République française |
| OSM `website` | https://www.elysee.fr |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, marker 3, road 199, building 177, zone 30, wall 9).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 68, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1060803 historic=castle Q188190 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 177 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 199 mapped (trace size budget); minor lanes are not drawn
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.87038/2.31661) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|official residence\|city palace; sitelinks=66; wikidata:Q188190 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/elysee-palace-q188190.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
