# Batavia Castle

> Indonesia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `batavia-castle-q2586938` |
| Coordinates | -6.1275, 106.81139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-6.1275/106.81139)) |
| Wikidata | [Q2586938](https://www.wikidata.org/wiki/Q2586938) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 6 |
| OSM `historic` | warehouse |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 292 elements (outline 1, waterway 2, water 3, road 34, building 250, zone 1, retaining-wall 1).

Evidence: documented 0, mapped 292, inferred 0, derived 0; heights documented 5, inferred 0, unknown 246.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/457735325 historic=warehouse Q2586938 246 m from ledger point
- origin moved 251 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-6.1275/106.81139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=6; wikidata:Q2586938 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 345 elements); data/traces/batavia-castle-q2586938.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 292 elements; outline osm:way/457735325 historic=warehouse Q2586938 246 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
