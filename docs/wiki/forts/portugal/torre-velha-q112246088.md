# Torre Velha

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-velha-q112246088` |
| Coordinates | 37.07714, -8.29761 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.07714/-8.29761)) |
| Wikidata | [Q112246088](https://www.wikidata.org/wiki/Q112246088) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Albufeira |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 99 elements (outline 1, zone 1, road 56, building 36, waterway 1, water 1, wall 2, coastline 1).

Evidence: documented 0, mapped 99, inferred 0, derived 0; heights documented 1, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/746620418 historic=archaeological_site 4 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.07714/-8.29761) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=2; wikidata:Q112246088 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 99 elements); data/traces/torre-velha-q112246088.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
