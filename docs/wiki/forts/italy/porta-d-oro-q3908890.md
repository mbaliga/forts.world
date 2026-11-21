# Porta d'Oro

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-d-oro-q3908890` |
| Coordinates | 37.29504, 13.79638 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.29504/13.79638)) |
| Wikidata | [Q3908890](https://www.wikidata.org/wiki/Q3908890) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 267 elements (outline 1, marker 2, road 122, building 577, wall 143, retaining-wall 47).

Evidence: documented 0, mapped 267, inferred 0, derived 0; heights documented 0, inferred 0, unknown 194.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/247599419 historic=castle Q3662762 396 m from ledger point
- pruned to the outline plus 150 m: 892 -> 533 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 326 mapped (trace size budget); the rest of the town is not drawn
- origin moved 395 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.29504/13.79638) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q3908890 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 267 elements); data/traces/porta-d-oro-q3908890.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
