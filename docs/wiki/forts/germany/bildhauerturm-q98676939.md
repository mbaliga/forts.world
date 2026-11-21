# Bildhauerturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bildhauerturm-q98676939` |
| Coordinates | 49.10535, 11.43961 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.10535/11.43961)) |
| Wikidata | [Q98676939](https://www.wikidata.org/wiki/Q98676939) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 372 elements (outline 1, marker 1, road 116, wall 11, building 225, waterway 9, zone 9).

Evidence: documented 0, mapped 372, inferred 0, derived 0; heights documented 4, inferred 0, unknown 232.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/998128356 historic=citywalls Q98676939 3 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- 51 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.10535/11.43961) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q98676939 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 372 elements); data/traces/bildhauerturm-q98676939.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
