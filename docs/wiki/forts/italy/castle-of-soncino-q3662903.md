# Castle of Soncino

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-soncino-q3662903` |
| Coordinates | 45.39749, 9.87175 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.39749/9.87175)) |
| Wikidata | [Q3662903](https://www.wikidata.org/wiki/Q3662903) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Soncino |
| Inception | 1473 |
| Designations | Italian national heritage |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 271 elements (outline 1, marker 4, road 98, building 252, wall 23, retaining-wall 3, zone 19, waterway 3).

Evidence: documented 0, mapped 271, inferred 0, derived 0; heights documented 18, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/411720140 historic=castle 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 252 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.39749/9.87175) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q3662903 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 271 elements); data/traces/castle-of-soncino-q3662903.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
