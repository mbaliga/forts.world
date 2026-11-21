# Porta Nuova

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-nuova-q28000557` |
| Coordinates | 45.17999, 9.15869 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.17999/9.15869)) |
| Wikidata | [Q28000557](https://www.wikidata.org/wiki/Q28000557) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Pavia |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 200 elements (outline 1, marker 4, road 72, zone 1, building 530, wall 2).

Evidence: documented 0, mapped 200, inferred 0, derived 0; heights documented 118, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1149646166 historic=building Q106211265 430 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 530 mapped (trace size budget); the rest of the town is not drawn
- origin moved 429 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.17999/9.15869) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q28000557 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 200 elements); data/traces/porta-nuova-q28000557.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
