# Castell de Vilafamés

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-de-vilafames-q4892979` |
| Coordinates | 40.11235, -0.05513 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.11235/-0.05513)) |
| Wikidata | [Q4892979](https://www.wikidata.org/wiki/Q4892979) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Vilafamés |
| Designations | bien de interés cultural |
| Wikipedia language editions | 5 |

## What the model contains

Tier **T1**, status `location-only`, 321 elements (marker 2, road 101, wall 91, building 402, waterway 3, zone 4).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 0, inferred 0, unknown 211.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 402 mapped (trace size budget); the rest of the town is not drawn
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.11235/-0.05513) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=5; wikidata:Q4892979 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 321 elements); data/traces/castell-de-vilafames-q4892979.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
