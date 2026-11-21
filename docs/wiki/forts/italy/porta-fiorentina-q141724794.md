# Porta Fiorentina

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-fiorentina-q141724794` |
| Coordinates | 43.95267, 11.38776 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.95267/11.38776)) |
| Wikidata | [Q141724794](https://www.wikidata.org/wiki/Q141724794) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Borgo San Lorenzo |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `website` | https://cultura.ilfilo.net/monastero-di-santa-caterina-a-borgo-san-lorenzo/ |

## What the model contains

Tier **T1**, status `outline+walls`, 234 elements (outline 1, marker 2, road 106, building 317, waterway 2, water 1, wall 2).

Evidence: documented 0, mapped 234, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2431455 historic=building 89 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 317 mapped (trace size budget); the rest of the town is not drawn
- origin moved 90 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.95267/11.38776) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q141724794 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 234 elements); data/traces/porta-fiorentina-q141724794.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
