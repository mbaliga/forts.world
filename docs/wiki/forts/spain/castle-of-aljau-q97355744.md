# Castle of Aljau

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-aljau-q97355744` |
| Coordinates | 38.34822, -0.76969 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.34822/-0.76969)) |
| Wikidata | [Q97355744](https://www.wikidata.org/wiki/Q97355744) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Aspe |
| Inception | 1400 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `website` | http://guiacastillosalicante.blogspot.com.es/2014/02/castillo-de-aljau-aspe-alicante-ca-269.html |

## What the model contains

Tier **T1**, status `outline+walls`, 204 elements (outline 1, road 74, building 351, wall 6, waterway 3).

Evidence: documented 0, mapped 204, inferred 0, derived 0; heights documented 9, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/264915892 historic=ruins 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 351 mapped (trace size budget); the rest of the town is not drawn
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.34822/-0.76969) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q97355744 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 204 elements); data/traces/castle-of-aljau-q97355744.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
