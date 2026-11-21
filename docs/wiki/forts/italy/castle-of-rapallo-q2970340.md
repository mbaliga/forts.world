# Castle of Rapallo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-rapallo-q2970340` |
| Coordinates | 44.34783, 9.23413 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.34783/9.23413)) |
| Wikidata | [Q2970340](https://www.wikidata.org/wiki/Q2970340) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Rapallo |
| Inception | 1551 |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 250 elements (outline 1, marker 1, road 95, coastline 1, building 147, waterway 2, water 3).

Evidence: documented 0, mapped 250, inferred 0, derived 3; heights documented 5, inferred 0, unknown 142.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/204742593 historic=castle Q2970340 4 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":217,"medianInside":0,"medianOutside":8.6}
- sea-1: DEM check ok {"cells":400,"medianInside":0.1,"medianOutside":10}
- sea-2: DEM check ok {"cells":400,"medianInside":0.1,"medianOutside":10}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.34783/9.23413) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q2970340 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 250 elements); data/traces/castle-of-rapallo-q2970340.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
