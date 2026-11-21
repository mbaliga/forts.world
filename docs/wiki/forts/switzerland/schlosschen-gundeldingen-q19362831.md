# Schlösschen Gundeldingen

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schlosschen-gundeldingen-q19362831` |
| Coordinates | 47.53994, 7.59209 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.53994/7.59209)) |
| Wikidata | [Q19362831](https://www.wikidata.org/wiki/Q19362831) (CC0) |
| Wikidata class | castle |
| Types | castle\|building |
| Administrative area | Basel |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 3 |
| OSM `website` | https://www.burgenwelt.org/schweiz/gundeldingen/object.php |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, marker 1, road 80, building 246, wall 1).

Evidence: documented 0, mapped 329, inferred 0, derived 0; heights documented 25, inferred 0, unknown 222.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/330669139 historic=(none; chosen by its Wikidata id) Q19362831 1 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.53994/7.59209) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|building; sitelinks=3; wikidata:Q19362831 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 326 elements); data/traces/schlosschen-gundeldingen-q19362831.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 329 elements; outline osm:way/330669139 historic=(none; chosen by its Wikidata id) Q19362831 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
