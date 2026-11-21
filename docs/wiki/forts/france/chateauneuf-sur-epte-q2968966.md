# Châteauneuf-sur-Epte

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateauneuf-sur-epte-q2968966` |
| Coordinates | 49.19778, 1.66194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.19778/1.66194)) |
| Wikidata | [Q2968966](https://www.wikidata.org/wiki/Q2968966) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Château-sur-Epte |
| Inception | 1097 |
| Designations | classified historical monument\|site naturel classé\|site naturel inscrit |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |
| OSM `heritage` | 2 |
| OSM `ruins` | castle |
| OSM `barrier` | fence |
| OSM `website` | https://www.chateaunormand.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 89 elements (outline 1, road 15, wall 21, zone 7, retaining-wall 1, building 42, water 2).

Evidence: documented 0, mapped 89, inferred 0, derived 0; heights documented 0, inferred 0, unknown 64.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/39018298 historic=ruins Q2968966 19 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.19778/1.66194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q2968966 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 89 elements); data/traces/chateauneuf-sur-epte-q2968966.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
