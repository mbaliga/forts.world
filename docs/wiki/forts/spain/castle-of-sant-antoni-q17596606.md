# Castle of Sant Antoni

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-sant-antoni-q17596606` |
| Coordinates | 40.0575, 4.13306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.0575/4.13306)) |
| Wikidata | [Q17596606](https://www.wikidata.org/wiki/Q17596606) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Es Mercadal |
| Inception | 1700 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 5 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, road 46, coastline 2, building 239, wall 17, water 1).

Evidence: documented 0, mapped 306, inferred 0, derived 1; heights documented 237, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/151992877 historic=ruins Q17596606 21 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":195,"medianInside":0,"medianOutside":8.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.0575/4.13306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q17596606 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/castle-of-sant-antoni-q17596606.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
