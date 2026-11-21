# Schloss Goldenstein

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-goldenstein-q2241229` |
| Coordinates | 47.75889, 13.08139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.75889/13.08139)) |
| Wikidata | [Q2241229](https://www.wikidata.org/wiki/Q2241229) (CC0) |
| Wikidata class | castle |
| Types | castle\|Ansitz\|château |
| Administrative area | Elsbethen |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 6 |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 190 elements (outline 1, road 84, wall 3, zone 30, building 69, waterway 2, water 1).

Evidence: documented 0, mapped 190, inferred 0, derived 0; heights documented 1, inferred 0, unknown 71.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/253032476 historic=(none; chosen by its Wikidata id) Q2241229 3 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.75889/13.08139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|Ansitz\|château; sitelinks=6; wikidata:Q2241229 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 194 elements); data/traces/schloss-goldenstein-q2241229.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 190 elements; outline osm:way/253032476 historic=(none; chosen by its Wikidata id) Q2241229 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
