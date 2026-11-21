# Église Saint-Michel d'Ungersheim

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eglise-saint-michel-d-ungersheim-q15953840` |
| Coordinates | 47.87694, 7.30563 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.87694/7.30563)) |
| Wikidata | [Q15953840](https://www.wikidata.org/wiki/Q15953840) (CC0) |
| Wikidata class | fort |
| Types | church building\|fortified church |
| Administrative area | Ungersheim |
| Inception | 1075 |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 158 elements (outline 1, road 33, building 509, zone 2, waterway 2).

Evidence: documented 0, mapped 158, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/39977737 historic=(none; chosen by its Wikidata id) Q15953840 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 509 mapped (trace size budget); the rest of the town is not drawn
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.87694/7.30563) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; church building\|fortified church; sitelinks=2; wikidata:Q15953840 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 157 elements); data/traces/eglise-saint-michel-d-ungersheim-q15953840.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 158 elements; outline osm:way/39977737 historic=(none; chosen by its Wikidata id) Q15953840 6 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
