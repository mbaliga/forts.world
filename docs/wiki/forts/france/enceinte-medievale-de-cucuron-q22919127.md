# Enceinte médiévale de Cucuron

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `enceinte-medievale-de-cucuron-q22919127` |
| Coordinates | 43.77321, 5.44048 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.77321/5.44048)) |
| Wikidata | [Q22919127](https://www.wikidata.org/wiki/Q22919127) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Cucuron |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 243 elements (outline 1, road 108, building 645, wall 7, zone 3, water 1, waterway 2, retaining-wall 1).

Evidence: documented 0, mapped 243, inferred 0, derived 0; heights documented 0, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/85155612 historic=citywalls 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 645 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.77321/5.44048) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q22919127 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 243 elements); data/traces/enceinte-medievale-de-cucuron-q22919127.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
