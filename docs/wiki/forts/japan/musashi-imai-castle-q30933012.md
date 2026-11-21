# Musashi Imai Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `musashi-imai-castle-q30933012` |
| Coordinates | 35.81044, 139.31444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.81044/139.31444)) |
| Wikidata | [Q30933012](https://www.wikidata.org/wiki/Q30933012) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 380 elements (marker 1, waterway 7, road 96, zone 1, building 132, wall 231).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 277, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 60 nearest the outline centre of 132 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 96 mapped (trace size budget); minor lanes are not drawn
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.81044/139.31444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=1; wikidata:Q30933012 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 380 elements); data/traces/musashi-imai-castle-q30933012.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
