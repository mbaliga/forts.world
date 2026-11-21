# Castle of Nervi

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-nervi-q113170854` |
| Coordinates | 44.38235, 9.03299 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.38235/9.03299)) |
| Wikidata | [Q113170854](https://www.wikidata.org/wiki/Q113170854) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Genoa |
| Inception | 1557 |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 173 elements (outline 1, waterway 1, road 75, coastline 1, building 78, wall 1, zone 1, retaining-wall 14, water 1).

Evidence: documented 0, mapped 173, inferred 0, derived 1; heights documented 28, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/353350974 historic=yes 4 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":192,"medianInside":0,"medianOutside":12.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.38235/9.03299) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q113170854 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 173 elements); data/traces/castle-of-nervi-q113170854.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
