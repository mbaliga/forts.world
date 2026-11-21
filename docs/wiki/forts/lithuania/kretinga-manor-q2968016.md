# Kretinga Manor

> Lithuania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kretinga-manor-q2968016` |
| Coordinates | 55.9, 21.2486 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.9/21.2486)) |
| Wikidata | [Q2968016](https://www.wikidata.org/wiki/Q2968016) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Kretinga Municipality |
| Wikipedia language editions | 6 |
| OSM `historic` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 117 elements (outline 1, marker 1, waterway 7, road 60, building 40, wall 2, zone 6).

Evidence: documented 0, mapped 117, inferred 0, derived 0; heights documented 11, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/83289379 historic=manor Q2968016 5 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.9/21.2486) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q2968016 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 116 elements); data/traces/kretinga-manor-q2968016.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 117 elements; outline osm:way/83289379 historic=manor Q2968016 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/lithuania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
