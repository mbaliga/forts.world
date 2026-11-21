# Torre Derecha

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-derecha-q97688627` |
| Coordinates | 36.74792, -4.05192 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.74792/-4.05192)) |
| Wikidata | [Q97688627](https://www.wikidata.org/wiki/Q97688627) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Algarrobo |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 146 elements (outline 1, road 69, building 68, coastline 1, water 3, zone 3, waterway 1).

Evidence: documented 0, mapped 146, inferred 0, derived 0; heights documented 1, inferred 0, unknown 67.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/437111840 historic=(none; chosen by its Wikidata id) Q97688627 4 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.74792/-4.05192) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=3; wikidata:Q97688627 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 149 elements); data/traces/torre-derecha-q97688627.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 146 elements; outline osm:way/437111840 historic=(none; chosen by its Wikidata id) Q97688627 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
