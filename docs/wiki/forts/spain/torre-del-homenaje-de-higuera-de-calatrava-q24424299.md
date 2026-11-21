# Torre del Homenaje de Higuera de Calatrava

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-homenaje-de-higuera-de-calatrava-q24424299` |
| Coordinates | 37.79905, -4.15966 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.79905/-4.15966)) |
| Wikidata | [Q24424299](https://www.wikidata.org/wiki/Q24424299) (CC0) |
| Wikidata class | fortification |
| Types | keep\|monument |
| Administrative area | Higuera de Calatrava |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 197 elements (outline 1, road 41, building 333, wall 27, retaining-wall 6, zone 2).

Evidence: documented 0, mapped 197, inferred 0, derived 0; heights documented 120, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1217862074 historic=(none; chosen by its Wikidata id) Q24424299 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 333 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.79905/-4.15966) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; keep\|monument; sitelinks=1; wikidata:Q24424299 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 196 elements); data/traces/torre-del-homenaje-de-higuera-de-calatrava-q24424299.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 197 elements; outline osm:way/1217862074 historic=(none; chosen by its Wikidata id) Q24424299 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
