# Käsbichlturm

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kasbichlturm-q37796957` |
| Coordinates | 47.20418, 14.28367 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.20418/14.28367)) |
| Wikidata | [Q37796957](https://www.wikidata.org/wiki/Q37796957) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Oberwölz |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 318 elements (outline 1, marker 2, road 60, building 235, wall 4, zone 14, waterway 2).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 1, inferred 0, unknown 238.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/209049874 historic=(none; chosen by its Wikidata id) Q37796957 5 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.20418/14.28367) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q37796957 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 314 elements); data/traces/kasbichlturm-q37796957.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 318 elements; outline osm:way/209049874 historic=(none; chosen by its Wikidata id) Q37796957 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
