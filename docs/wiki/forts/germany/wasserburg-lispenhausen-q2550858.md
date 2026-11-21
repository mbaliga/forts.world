# Wasserburg Lispenhausen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wasserburg-lispenhausen-q2550858` |
| Coordinates | 50.9916, 9.7681 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.9916/9.7681)) |
| Wikidata | [Q2550858](https://www.wikidata.org/wiki/Q2550858) (CC0) |
| Wikidata class | castle |
| Types | water castle |
| Administrative area | Rotenburg an der Fulda |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 239 elements (outline 1, road 32, waterway 2, zone 4, building 200).

Evidence: documented 0, mapped 239, inferred 0, derived 0; heights documented 0, inferred 0, unknown 200.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/856474556 historic=(none; chosen by its Wikidata id) Q2550858 4 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.9916/9.7681) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; water castle; sitelinks=2; wikidata:Q2550858 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 236 elements); data/traces/wasserburg-lispenhausen-q2550858.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 239 elements; outline osm:way/856474556 historic=(none; chosen by its Wikidata id) Q2550858 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
