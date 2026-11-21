# Palais Jacques-Cœur

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-jacques-c-ur-q3360877` |
| Coordinates | 47.08422, 2.39368 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.08422/2.39368)) |
| Wikidata | [Q3360877](https://www.wikidata.org/wiki/Q3360877) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|no\|private mansion |
| Administrative area | Bourges |
| Designations | classified historical monument |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 2 |
| OSM `ruins` | no |
| OSM `website` | https://www.palais-jacques-coeur.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, marker 1, road 217, building 566, waterway 1, wall 11, zone 2).

Evidence: documented 0, mapped 286, inferred 0, derived 0; heights documented 2, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1016747 historic=castle Q3360877 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 566 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 217 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.08422/2.39368) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|no\|private mansion; sitelinks=10; wikidata:Q3360877 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/palais-jacques-c-ur-q3360877.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
