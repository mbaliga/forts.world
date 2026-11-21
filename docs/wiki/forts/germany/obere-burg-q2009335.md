# Obere Burg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `obere-burg-q2009335` |
| Coordinates | 50.61661, 7.22947 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.61661/7.22947)) |
| Wikidata | [Q2009335](https://www.wikidata.org/wiki/Q2009335) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Rheinbreitbach |
| Designations | cultural heritage monument in Rhineland-Palatinate |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `description` | Ortsgemeinde Rheinbreitbach |

## What the model contains

Tier **T1**, status `outline+walls`, 265 elements (outline 1, marker 11, road 102, building 318, waterway 4, zone 3, water 1, wall 17, retaining-wall 6).

Evidence: documented 0, mapped 265, inferred 0, derived 0; heights documented 1, inferred 0, unknown 142.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/59007488 historic=castle Q2009335 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 318 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.61661/7.22947) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q2009335 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 265 elements); data/traces/obere-burg-q2009335.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
