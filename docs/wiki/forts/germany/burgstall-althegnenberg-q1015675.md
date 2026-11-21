# Burgstall Althegnenberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burgstall-althegnenberg-q1015675` |
| Coordinates | 48.2338, 11.0651 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.2338/11.0651)) |
| Wikidata | [Q1015675](https://www.wikidata.org/wiki/Q1015675) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site\|deserted castle site |
| Administrative area | Althegnenberg |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 363 elements (outline 1, marker 2, road 153, water 1, waterway 4, zone 5, building 195, wall 2).

Evidence: documented 0, mapped 363, inferred 0, derived 0; heights documented 2, inferred 0, unknown 195.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33782772 historic=(none; chosen by its Wikidata id) Q1015675 11 m from ledger point
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.2338/11.0651) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site\|deserted castle site; sitelinks=2; wikidata:Q1015675 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 357 elements); data/traces/burgstall-althegnenberg-q1015675.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 363 elements; outline osm:way/33782772 historic=(none; chosen by its Wikidata id) Q1015675 11 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
