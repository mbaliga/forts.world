# Namutoni

> Namibia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `namutoni-q317319` |
| Coordinates | -18.80811, 16.94028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-18.80811/16.94028)) |
| Wikidata | [Q317319](https://www.wikidata.org/wiki/Q317319) (CC0) |
| Wikidata class | fort |
| Types | campsite\|citadel |
| Administrative area | Oshikoto Region |
| Designations | national monument of Namibia |
| Wikipedia language editions | 9 |

## What the model contains

Tier **T1**, status `outline-only`, 82 elements (outline 1, marker 2, road 44, water 1, building 34).

Evidence: documented 0, mapped 82, inferred 0, derived 0; heights documented 0, inferred 0, unknown 34.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/173940015 historic=(none; chosen by its Wikidata id) Q317319 42 m from ledger point
- origin moved 41 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-18.80811/16.94028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; campsite\|citadel; sitelinks=9; wikidata:Q317319 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 81 elements); data/traces/namutoni-q317319.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 82 elements; outline osm:way/173940015 historic=(none; chosen by its Wikidata id) Q317319 42 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/namibia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
