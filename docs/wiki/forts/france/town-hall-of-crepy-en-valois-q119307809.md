# town hall of Crépy-en-Valois

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `town-hall-of-crepy-en-valois-q119307809` |
| Coordinates | 49.23617, 2.89015 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.23617/2.89015)) |
| Wikidata | [Q119307809](https://www.wikidata.org/wiki/Q119307809) (CC0) |
| Wikidata class | castle |
| Types | castle\|facility |
| Administrative area | Crépy-en-Valois |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 215 elements (outline 1, marker 1, road 85, building 438, zone 7, water 1).

Evidence: documented 0, mapped 215, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/92233344 historic=castle Q119307809 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 438 mapped (trace size budget); the rest of the town is not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.23617/2.89015) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|facility; sitelinks=1; wikidata:Q119307809 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 215 elements); data/traces/town-hall-of-crepy-en-valois-q119307809.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
