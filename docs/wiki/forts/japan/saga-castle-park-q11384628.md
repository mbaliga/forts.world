# Saga Castle Park

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `saga-castle-park-q11384628` |
| Coordinates | 33.2444, 130.3015 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.2444/130.3015)) |
| Wikidata | [Q11384628](https://www.wikidata.org/wiki/Q11384628) (CC0) |
| Wikidata class | ruin |
| Types | urban park\|castle ruin in Japan |
| Administrative area | Jōnai |
| Inception | 1966 |
| Wikipedia language editions | 2 |
| OSM `historic` | tomb |

## What the model contains

Tier **T1**, status `outline-only`, 294 elements (outline 1, marker 3, waterway 39, water 3, road 118, zone 10, building 294).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1495985238 historic=tomb 415 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 294 mapped (trace size budget); the rest of the town is not drawn
- origin moved 416 m from the ledger point to the centre of the mapped site
- 93 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.2444/130.3015) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; urban park\|castle ruin in Japan; sitelinks=2; wikidata:Q11384628 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 294 elements); data/traces/saga-castle-park-q11384628.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
