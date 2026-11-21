# Schachturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schachturm-q111905315` |
| Coordinates | 51.91605, 10.94156 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.91605/10.94156)) |
| Wikidata | [Q111905315](https://www.wikidata.org/wiki/Q111905315) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Halberstadt |
| Designations | architectural heritage monument\|heritage monument in Saxony-Anhalt |
| Wikipedia language editions | 1 |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 244 elements (outline 1, road 34, zone 3, building 202, waterway 3, retaining-wall 1).

Evidence: documented 0, mapped 244, inferred 0, derived 0; heights documented 1, inferred 0, unknown 202.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1029532088 historic=(none; chosen by its Wikidata id) Q111905315 1 m from ledger point

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.91605/10.94156) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=1; wikidata:Q111905315 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 244 elements); data/traces/schachturm-q111905315.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 244 elements; outline osm:way/1029532088 historic=(none; chosen by its Wikidata id) Q111905315 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
