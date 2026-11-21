# Castell de Piera

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-de-piera-q8342507` |
| Coordinates | 41.5159, 1.74167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.5159/1.74167)) |
| Wikidata | [Q8342507](https://www.wikidata.org/wiki/Q8342507) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Piera |
| Designations | bien de interés cultural\|Cultural Asset of National Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | manor |

## What the model contains

Tier **T1**, status `outline-only`, 19 elements (outline 1, road 25, waterway 7, zone 2, building 14).

Evidence: documented 0, mapped 19, inferred 0, derived 0; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/358497698 historic=manor Q8342507 7 m from ledger point
- pruned to the outline plus 60 m: 49 -> 19 elements
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.5159/1.74167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q8342507 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 87 elements); data/traces/castell-de-piera-q8342507.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 19 elements; outline osm:way/358497698 historic=manor Q8342507 7 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
