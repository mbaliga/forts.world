# Castle Trompette

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-trompette-q1090683` |
| Coordinates | 44.8458, -0.5722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.8458/-0.5722)) |
| Wikidata | [Q1090683](https://www.wikidata.org/wiki/Q1090683) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bordeaux |
| Wikipedia language editions | 2 |
| OSM `historic` | monument |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 276 elements (outline 1, marker 2, road 192, building 213, zone 2, water 1).

Evidence: documented 0, mapped 276, inferred 0, derived 0; heights documented 4, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/568436009 historic=monument Q1064990 215 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 213 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 192 mapped (trace size budget); minor lanes are not drawn
- origin moved 214 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.8458/-0.5722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q1090683 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 276 elements); data/traces/castle-trompette-q1090683.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
