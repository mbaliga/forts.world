# Stadtmauer Neutorzwinger in Nürnberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-neutorzwinger-in-nurnberg-q98630446` |
| Coordinates | 49.45637, 11.0711 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.45637/11.0711)) |
| Wikidata | [Q98630446](https://www.wikidata.org/wiki/Q98630446) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Nuremberg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `description` | grünes K |

## What the model contains

Tier **T1**, status `outline+walls`, 325 elements (outline 1, marker 8, road 268, waterway 3, zone 14, water 2, wall 23, building 239, retaining-wall 4).

Evidence: documented 0, mapped 325, inferred 0, derived 0; heights documented 52, inferred 0, unknown 95.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23448111 historic=citywalls Q1981845 33 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 239 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 268 mapped (trace size budget); minor lanes are not drawn
- origin moved 33 m from the ledger point to the centre of the mapped site
- 40 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.45637/11.0711) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q98630446 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 325 elements); data/traces/stadtmauer-neutorzwinger-in-nurnberg-q98630446.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
