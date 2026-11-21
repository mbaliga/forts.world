# Cases de Bóquer

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cases-de-boquer-q43142313` |
| Coordinates | 39.91463, 3.08239 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.91463/3.08239)) |
| Wikidata | [Q43142313](https://www.wikidata.org/wiki/Q43142313) (CC0) |
| Wikidata class | fort |
| Types | fortified house |
| Administrative area | Pollença |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `outline+walls`, 52 elements (outline 1, road 18, coastline 1, wall 11, waterway 1, cliff 1, zone 3, building 3, retaining-wall 13).

Evidence: documented 0, mapped 52, inferred 0, derived 0; heights documented 0, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/96821047 historic=(none; chosen by its Wikidata id) Q43142313 6 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.91463/3.08239) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified house; sitelinks=0; wikidata:Q43142313 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 53 elements); data/traces/cases-de-boquer-q43142313.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 52 elements; outline osm:way/96821047 historic=(none; chosen by its Wikidata id) Q43142313 6 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
