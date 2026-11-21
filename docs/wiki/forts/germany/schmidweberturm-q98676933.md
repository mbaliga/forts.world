# Schmidweberturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schmidweberturm-q98676933` |
| Coordinates | 49.10627, 11.43818 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.10627/11.43818)) |
| Wikidata | [Q98676933](https://www.wikidata.org/wiki/Q98676933) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 374 elements (outline 1, marker 1, road 106, wall 6, waterway 8, water 1, building 243, zone 7, retaining-wall 1).

Evidence: documented 0, mapped 374, inferred 0, derived 0; heights documented 3, inferred 0, unknown 247.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/211924419 historic=citywalls Q98676933 1 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- 40 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.10627/11.43818) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q98676933 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 374 elements); data/traces/schmidweberturm-q98676933.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
