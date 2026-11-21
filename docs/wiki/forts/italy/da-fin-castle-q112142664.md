# Da Fin Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `da-fin-castle-q112142664` |
| Coordinates | 45.89016, 9.99243 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.89016/9.99243)) |
| Wikidata | [Q112142664](https://www.wikidata.org/wiki/Q112142664) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Fino del Monte |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 250 elements (outline 1, road 72, zone 15, waterway 3, building 131, wall 22, retaining-wall 6).

Evidence: documented 0, mapped 250, inferred 0, derived 0; heights documented 2, inferred 0, unknown 157.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1530027264 historic=castle 6 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.89016/9.99243) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q112142664 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 250 elements); data/traces/da-fin-castle-q112142664.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
