# Town hall of Saint-Paul-de-Vence

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `town-hall-of-saint-paul-de-vence-q14628532` |
| Coordinates | 43.697, 7.12222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.697/7.12222)) |
| Wikidata | [Q14628532](https://www.wikidata.org/wiki/Q14628532) (CC0) |
| Wikidata class | fortification |
| Types | keep |
| Administrative area | Saint-Paul-de-Vence |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | 2 |
| OSM `description` | Tour du 12e siècle |

## What the model contains

Tier **T1**, status `outline+walls`, 223 elements (outline 1, marker 5, road 93, zone 1, building 323, wall 3).

Evidence: documented 0, mapped 223, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1424226233 historic=yes Q14628532 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 323 mapped (trace size budget); the rest of the town is not drawn
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.697/7.12222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; keep; sitelinks=2; wikidata:Q14628532 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 223 elements); data/traces/town-hall-of-saint-paul-de-vence-q14628532.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
