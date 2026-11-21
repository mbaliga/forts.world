# Château de Schœneck

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-sch-neck-q284933` |
| Coordinates | 49.01889, 7.65861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.01889/7.65861)) |
| Wikidata | [Q284933](https://www.wikidata.org/wiki/Q284933) (CC0) |
| Wikidata class | castle |
| Types | rock castle |
| Administrative area | Dambach |
| Inception | 1200 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |
| OSM `ruins` | yes |
| OSM `website` | http://chateau.schoeneck.free.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 64 elements (outline 1, zone 4, road 31, wall 28).

Evidence: documented 0, mapped 64, inferred 0, derived 0; heights documented 0, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/204636653 historic=castle Q284933 11 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.01889/7.65861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; rock castle; sitelinks=5; wikidata:Q284933 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 64 elements); data/traces/chateau-de-sch-neck-q284933.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
