# Tour des Sorcières

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-des-sorcieres-q15953411` |
| Coordinates | 47.9556, 7.29964 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.9556/7.29964)) |
| Wikidata | [Q15953411](https://www.wikidata.org/wiki/Q15953411) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Rouffach |
| Inception | 1380 |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 204 elements (outline 1, marker 2, road 68, building 439, wall 13).

Evidence: documented 0, mapped 204, inferred 0, derived 0; heights documented 0, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/156792812 historic=(none; chosen by its Wikidata id) Q15953411 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 439 mapped (trace size budget); the rest of the town is not drawn
- origin moved 10 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.9556/7.29964) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q15953411 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 204 elements); data/traces/tour-des-sorcieres-q15953411.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 204 elements; outline osm:way/156792812 historic=(none; chosen by its Wikidata id) Q15953411 10 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
