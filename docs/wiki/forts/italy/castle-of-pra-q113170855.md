# Castle of Pra

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-pra-q113170855` |
| Coordinates | 44.42456, 8.79955 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.42456/8.79955)) |
| Wikidata | [Q113170855](https://www.wikidata.org/wiki/Q113170855) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Genoa |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 146 elements (outline 1, road 70, building 61, coastline 1, water 2, wall 3, zone 6, retaining-wall 1, waterway 1).

Evidence: documented 0, mapped 146, inferred 0, derived 1; heights documented 54, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/224361227 historic=ruins 2 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":183,"medianInside":0,"medianOutside":16.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.42456/8.79955) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q113170855 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 146 elements); data/traces/castle-of-pra-q113170855.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
