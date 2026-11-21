# Forte Antenne

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-antenne-q3748511` |
| Coordinates | 41.93807, 12.50067 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.93807/12.50067)) |
| Wikidata | [Q3748511](https://www.wikidata.org/wiki/Q3748511) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Rome |
| Inception | 1880 |
| Wikipedia language editions | 4 |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 37 elements (outline 1, marker 1, road 18, water 1, building 13, waterway 2).

Evidence: documented 0, mapped 37, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/39362069 historic=(none; chosen by its Wikidata id) Q3748511 11 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.93807/12.50067) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q3748511 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 36 elements); data/traces/forte-antenne-q3748511.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 37 elements; outline osm:way/39362069 historic=(none; chosen by its Wikidata id) Q3748511 11 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
