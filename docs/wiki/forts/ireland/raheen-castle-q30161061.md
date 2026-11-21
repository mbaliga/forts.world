# Raheen Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `raheen-castle-q30161061` |
| Coordinates | 51.53583, -9.16361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.53583/-9.16361)) |
| Wikidata | [Q30161061](https://www.wikidata.org/wiki/Q30161061) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | County Cork |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `description` | Built by Domhnall Ó Donnabháin some time after he was inaugurated in 1584. East wall destroyed by Cromwell's forces in 1649. |

## What the model contains

Tier **T1**, status `outline-only`, 14 elements (outline 1, road 9, coastline 3, water 1).

Evidence: documented 0, mapped 14, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/992323859 historic=castle Q30161061 13 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":139,"medianInside":8.6,"medianOutside":18.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.53583/-9.16361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=1; wikidata:Q30161061 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 14 elements); data/traces/raheen-castle-q30161061.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
