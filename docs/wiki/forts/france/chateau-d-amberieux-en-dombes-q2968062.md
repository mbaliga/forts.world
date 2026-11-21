# Château d'Ambérieux-en-Dombes

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-amberieux-en-dombes-q2968062` |
| Coordinates | 45.9971, 4.90303 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.9971/4.90303)) |
| Wikidata | [Q2968062](https://www.wikidata.org/wiki/Q2968062) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Ambérieux-en-Dombes |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `location-only`, 207 elements (marker 2, road 78, water 2, building 365, zone 5).

Evidence: documented 0, mapped 207, inferred 0, derived 0; heights documented 5, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3205200 historic=castle Q2968062 50 m from ledger point
- site is a site relation of 3 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (62 x 49 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 365 mapped (trace size budget); the rest of the town is not drawn
- origin moved 37 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.9971/4.90303) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q2968062 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 207 elements); data/traces/chateau-d-amberieux-en-dombes-q2968062.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
