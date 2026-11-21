# Peñón de Alhucemas

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `penon-de-alhucemas-q191697` |
| Coordinates | 35.2135, -3.8895 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.2135/-3.8895)) |
| Wikidata | [Q191697](https://www.wikidata.org/wiki/Q191697) (CC0) |
| Wikidata class | fortification |
| Types | island\|peñón |
| Administrative area | Melilla |
| Wikipedia language editions | 39 |

## What the model contains

Tier **T1**, status `outline+walls`, 17 elements (outline 1, coastline 1, building 6, road 8, wall 1).

Evidence: documented 0, mapped 17, inferred 0, derived 0; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/8692684 historic=(none; chosen by its Wikidata id) Q191697 20 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 20 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.2135/-3.8895) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; island\|peñón; sitelinks=39; wikidata:Q191697 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 17 elements); data/traces/penon-de-alhucemas-q191697.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 17 elements; outline osm:way/8692684 historic=(none; chosen by its Wikidata id) Q191697 20 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
