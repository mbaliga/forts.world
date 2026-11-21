# City walls of Béthune

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-bethune-q84966761` |
| Coordinates | 50.53095, 2.63933 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.53095/2.63933)) |
| Wikidata | [Q84966761](https://www.wikidata.org/wiki/Q84966761) (CC0) |
| Wikidata class | fortification |
| Types | enceinte |
| Administrative area | Béthune |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 279 elements (outline 1, marker 3, road 232, building 737, wall 5).

Evidence: documented 0, mapped 279, inferred 0, derived 0; heights documented 0, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/264129438 historic=ruins 244 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 737 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 232 mapped (trace size budget); minor lanes are not drawn
- origin moved 245 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.53095/2.63933) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; enceinte; sitelinks=2; wikidata:Q84966761 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 279 elements); data/traces/city-walls-of-bethune-q84966761.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
