# Schloss Edesheim

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-edesheim-q61943347` |
| Coordinates | 49.26273, 8.13248 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.26273/8.13248)) |
| Wikidata | [Q61943347](https://www.wikidata.org/wiki/Q61943347) (CC0) |
| Wikidata class | castle |
| Types | water castle |
| Administrative area | Edesheim |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, waterway 6, road 36, building 246, wall 5, water 1, zone 4).

Evidence: documented 0, mapped 299, inferred 0, derived 0; heights documented 2, inferred 0, unknown 249.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/160661500 historic=castle 4 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.26273/8.13248) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; water castle; sitelinks=2; wikidata:Q61943347 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/schloss-edesheim-q61943347.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
