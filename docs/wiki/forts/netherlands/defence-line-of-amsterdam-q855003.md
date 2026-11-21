# Defence Line of Amsterdam

> Netherlands · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `defence-line-of-amsterdam-q855003` |
| Coordinates | 52.38428, 4.83067 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.38428/4.83067)) |
| Wikidata | [Q855003](https://www.wikidata.org/wiki/Q855003) (CC0) |
| Wikidata class | fort |
| Types | fort\|fortification\|waterline\|Nationaal Landschap |
| Administrative area | North Holland |
| Designations | part of UNESCO World Heritage Site |
| UNESCO WHC id | 759-001 |
| Wikipedia language editions | 39 |

## What the model contains

Tier **T1**, status `location-only`, 231 elements (marker 1, road 71, water 4, waterway 2, zone 33, building 357).

Evidence: documented 0, mapped 231, inferred 0, derived 0; heights documented 118, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 357 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.38428/4.83067) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|fortification\|waterline\|Nationaal Landschap; sitelinks=39; wikidata:Q855003 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 231 elements); data/traces/defence-line-of-amsterdam-q855003.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
