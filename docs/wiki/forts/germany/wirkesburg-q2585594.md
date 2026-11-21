# Wirkesburg

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wirkesburg-q2585594` |
| Coordinates | 52.29, 9.40391 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.29/9.40391)) |
| Wikidata | [Q2585594](https://www.wikidata.org/wiki/Q2585594) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Lauenau |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `location-only`, 94 elements (marker 1, road 26, waterway 12, building 54, zone 1).

Evidence: documented 0, mapped 94, inferred 0, derived 0; heights documented 6, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10046358 historic=archaeological_site 191 m from ledger point
- site is a site relation of 12 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (489 x 372 m)
- origin moved 234 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.29/9.40391) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q2585594 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 94 elements); data/traces/wirkesburg-q2585594.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
