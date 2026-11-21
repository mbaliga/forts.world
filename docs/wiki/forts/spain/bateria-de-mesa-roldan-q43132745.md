# Batería de Mesa Roldán

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bateria-de-mesa-roldan-q43132745` |
| Coordinates | 36.9416, -1.90931 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.9416/-1.90931)) |
| Wikidata | [Q43132745](https://www.wikidata.org/wiki/Q43132745) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Carboneras |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | watchtower |

## What the model contains

Tier **T1**, status `outline+walls`, 14 elements (outline 1, coastline 1, building 2, road 6, cliff 2, wall 2).

Evidence: documented 0, mapped 14, inferred 0, derived 0; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/277026083 historic=watchtower Q43132745 3 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.9416/-1.90931) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=3; wikidata:Q43132745 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 14 elements); data/traces/bateria-de-mesa-roldan-q43132745.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 14 elements; outline osm:way/277026083 historic=watchtower Q43132745 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
