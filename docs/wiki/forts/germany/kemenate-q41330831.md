# Kemenate

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kemenate-q41330831` |
| Coordinates | 50.36406, 10.44954 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.36406/10.44954)) |
| Wikidata | [Q41330831](https://www.wikidata.org/wiki/Q41330831) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline-only`, 236 elements (outline 1, road 34, building 189, waterway 3, water 1, zone 8).

Evidence: documented 0, mapped 236, inferred 0, derived 0; heights documented 0, inferred 0, unknown 189.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/604551336 historic=(none; chosen by its Wikidata id) Q41330831 4 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.36406/10.44954) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q41330831 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 235 elements); data/traces/kemenate-q41330831.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 236 elements; outline osm:way/604551336 historic=(none; chosen by its Wikidata id) Q41330831 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
