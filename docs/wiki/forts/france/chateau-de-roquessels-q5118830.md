# Château de Roquessels

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-roquessels-q5118830` |
| Coordinates | 43.5525, 3.22333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.5525/3.22333)) |
| Wikidata | [Q5118830](https://www.wikidata.org/wiki/Q5118830) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Roquessels |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 192 elements (outline 1, marker 3, road 61, building 120, retaining-wall 4, zone 1, waterway 2).

Evidence: documented 0, mapped 192, inferred 0, derived 0; heights documented 1, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/367259666 historic=(none; chosen by its Wikidata id) Q5118830 11 m from ledger point
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.5525/3.22333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q5118830 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 199 elements); data/traces/chateau-de-roquessels-q5118830.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 192 elements; outline osm:way/367259666 historic=(none; chosen by its Wikidata id) Q5118830 11 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
