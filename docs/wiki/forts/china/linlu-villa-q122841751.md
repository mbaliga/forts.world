# Linlu Villa

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `linlu-villa-q122841751` |
| Coordinates | 22.28562, 112.56501 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.28562/112.56501)) |
| Wikidata | [Q122841751](https://www.wikidata.org/wiki/Q122841751) (CC0) |
| Wikidata class | fortification |
| Types | geographical feature\|diaolou |
| Administrative area | Majianglong Village Cluster |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline-only`, 70 elements (outline 1, waterway 1, zone 1, road 10, building 56, water 1).

Evidence: documented 0, mapped 70, inferred 0, derived 0; heights documented 0, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/860536551 historic=(none; chosen by its Wikidata id) Q122841751 7 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site
- 44 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.28562/112.56501) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; geographical feature\|diaolou; sitelinks=1; wikidata:Q122841751 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 70 elements); data/traces/linlu-villa-q122841751.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 70 elements; outline osm:way/860536551 historic=(none; chosen by its Wikidata id) Q122841751 7 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
