# Baozhanglou Tower

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `baozhanglou-tower-q122765585` |
| Coordinates | 22.28601, 112.56507 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.28601/112.56507)) |
| Wikidata | [Q122765585](https://www.wikidata.org/wiki/Q122765585) (CC0) |
| Wikidata class | fortification |
| Types | geographical feature\|diaolou |
| Administrative area | Majianglong Village Cluster |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline-only`, 72 elements (outline 1, waterway 1, zone 1, road 10, building 57, water 2).

Evidence: documented 0, mapped 72, inferred 0, derived 0; heights documented 0, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/860536550 historic=(none; chosen by its Wikidata id) Q122765585 10 m from ledger point
- origin moved 9 m from the ledger point to the centre of the mapped site
- 45 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.28601/112.56507) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; geographical feature\|diaolou; sitelinks=1; wikidata:Q122765585 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 72 elements); data/traces/baozhanglou-tower-q122765585.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 72 elements; outline osm:way/860536550 historic=(none; chosen by its Wikidata id) Q122765585 10 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
