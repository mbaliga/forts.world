# Castello Presati

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-presati-q112169827` |
| Coordinates | 45.70001, 9.62132 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.70001/9.62132)) |
| Wikidata | [Q112169827](https://www.wikidata.org/wiki/Q112169827) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bergamo |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `description` | Cammino che ripercorre il percorso compiuto dai partigiani della Brigata Val Brembo, il 26 settembre 1944, dall’assalto alla villa Masnada, fino al tragico epilogo sui colli di Petosino. |
| OSM `website` | https://www.cristianriva.it/traccia-partigiana/ |

## What the model contains

Tier **T1**, status `location-only`, 210 elements (road 58, building 146, waterway 3, water 3).

Evidence: documented 0, mapped 210, inferred 0, derived 0; heights documented 0, inferred 0, unknown 146.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14163984 historic=yes 1197 m from ledger point
- site is a route relation of 47 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (2227 x 3532 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.70001/9.62132) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q112169827 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 210 elements); data/traces/castello-presati-q112169827.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
