# Castello dei Doria

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-dei-doria-q113163593` |
| Coordinates | 44.13257, 8.2562 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.13257/8.2562)) |
| Wikidata | [Q113163593](https://www.wikidata.org/wiki/Q113163593) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Loano |
| Inception | 1289 |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 247 elements (outline 1, road 96, waterway 4, building 115, coastline 1, water 1, zone 23, wall 6).

Evidence: documented 0, mapped 247, inferred 0, derived 0; heights documented 3, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2714710 historic=castle 2 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 2 m from the ledger point to the centre of the mapped site
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.13257/8.2562) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q113163593 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 247 elements); data/traces/castello-dei-doria-q113163593.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
