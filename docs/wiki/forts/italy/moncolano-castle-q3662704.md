# Moncolano Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `moncolano-castle-q3662704` |
| Coordinates | 45.70306, 13.73194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.70306/13.73194)) |
| Wikidata | [Q3662704](https://www.wikidata.org/wiki/Q3662704) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Trieste |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |
| OSM `website` | https://fondoambiente.it/luoghi/castello-di-prosecco?ldc |

## What the model contains

Tier **T1**, status `outline+walls`, 242 elements (outline 1, marker 3, building 164, zone 7, road 60, water 1, coastline 1, retaining-wall 3, wall 2).

Evidence: documented 0, mapped 242, inferred 0, derived 0; heights documented 155, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/148460782 historic=ruins Q3662704 4 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.70306/13.73194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q3662704 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 242 elements); data/traces/moncolano-castle-q3662704.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
