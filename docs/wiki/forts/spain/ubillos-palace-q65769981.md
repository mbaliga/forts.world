# Ubillos Palace

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ubillos-palace-q65769981` |
| Coordinates | 43.29595, -2.25946 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.29595/-2.25946)) |
| Wikidata | [Q65769981](https://www.wikidata.org/wiki/Q65769981) (CC0) |
| Wikidata class | fortification |
| Types | tower\|tower house\|monument |
| Administrative area | Zumaia |
| Designations | Basque government heritage site\|part of UNESCO World Heritage Site\|bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 251 elements (outline 1, marker 1, road 269, water 1, building 173, zone 63, coastline 1, waterway 4, retaining-wall 39, wall 39).

Evidence: documented 0, mapped 251, inferred 0, derived 0; heights documented 47, inferred 0, unknown 80.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/44178474 historic=manor Q65769981 4 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- pruned to the outline plus 150 m: 591 -> 403 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 120 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 172 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.29595/-2.25946) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|tower house\|monument; sitelinks=3; wikidata:Q65769981 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 288 elements); data/traces/ubillos-palace-q65769981.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 251 elements; outline osm:way/44178474 historic=manor Q65769981 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
