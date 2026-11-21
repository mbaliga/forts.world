# Castello Visconteo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-visconteo-q21196197` |
| Coordinates | 46.0081, 8.29597 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.0081/8.29597)) |
| Wikidata | [Q21196197](https://www.wikidata.org/wiki/Q21196197) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Vogogna |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `description` | Per gli orari di visita si consiglia di visitare il sito. |

## What the model contains

Tier **T1**, status `outline+walls`, 273 elements (outline 1, marker 5, road 83, building 175, waterway 1, wall 8).

Evidence: documented 0, mapped 273, inferred 0, derived 0; heights documented 7, inferred 0, unknown 176.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1019085669 historic=castle Q21196197 5 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.0081/8.29597) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q21196197 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 264 elements); data/traces/castello-visconteo-q21196197.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 273 elements; outline osm:way/1019085669 historic=castle Q21196197 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
