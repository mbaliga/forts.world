# Castillo de la Luz

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-la-luz-q1049274` |
| Coordinates | 28.14861, -15.42486 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.14861/-15.42486)) |
| Wikidata | [Q1049274](https://www.wikidata.org/wiki/Q1049274) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum\|monument |
| Administrative area | Las Palmas de Gran Canaria |
| Designations | bien de interés cultural |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 332 elements (outline 1, coastline 2, road 72, building 245, wall 12).

Evidence: documented 0, mapped 332, inferred 0, derived 0; heights documented 13, inferred 0, unknown 244.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/126808548 historic=castle Q1049274 10 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.14861/-15.42486) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum\|monument; sitelinks=6; wikidata:Q1049274 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 332 elements); data/traces/castillo-de-la-luz-q1049274.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
