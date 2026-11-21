# Town gate of Jonzac

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `town-gate-of-jonzac-q22955042` |
| Coordinates | 45.4447, -0.4345 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.4447/-0.4345)) |
| Wikidata | [Q22955042](https://www.wikidata.org/wiki/Q22955042) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Jonzac |
| Designations | classified historical monument |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 217 elements (outline 1, marker 2, road 72, building 387, zone 8, waterway 4, retaining-wall 1, wall 8, water 1).

Evidence: documented 0, mapped 217, inferred 0, derived 0; heights documented 4, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1460091771 historic=castle Q2779370 273 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 387 mapped (trace size budget); the rest of the town is not drawn
- origin moved 273 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.4447/-0.4345) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q22955042 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 217 elements); data/traces/town-gate-of-jonzac-q22955042.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
