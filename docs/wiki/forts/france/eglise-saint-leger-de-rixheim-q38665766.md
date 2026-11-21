# Église Saint-Léger de Rixheim

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eglise-saint-leger-de-rixheim-q38665766` |
| Coordinates | 47.74231, 7.39911 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.74231/7.39911)) |
| Wikidata | [Q38665766](https://www.wikidata.org/wiki/Q38665766) (CC0) |
| Wikidata class | fort |
| Types | fortified church |
| Administrative area | Rixheim |
| Inception | 1200 |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 191 elements (outline 1, marker 3, road 54, building 444, zone 5, wall 8).

Evidence: documented 0, mapped 191, inferred 0, derived 0; heights documented 0, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/61568914 historic=(none; chosen by its Wikidata id) Q38665766 22 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 444 mapped (trace size budget); the rest of the town is not drawn
- origin moved 23 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.74231/7.39911) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified church; sitelinks=1; wikidata:Q38665766 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 194 elements); data/traces/eglise-saint-leger-de-rixheim-q38665766.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 191 elements; outline osm:way/61568914 historic=(none; chosen by its Wikidata id) Q38665766 22 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
