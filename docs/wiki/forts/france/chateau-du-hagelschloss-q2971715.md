# Château du Hagelschloss

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-du-hagelschloss-q2971715` |
| Coordinates | 48.44944, 7.38944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.44944/7.38944)) |
| Wikidata | [Q2971715](https://www.wikidata.org/wiki/Q2971715) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Ottrott |
| Inception | 1300 |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 5 |
| OSM `historic` | archaeological_site |
| OSM `description` | Ruins of an ancient celtic fortress (-7th ~ -2nd c. BC), renovated by romans (0 ~ 2nd c. AC) & by francs (7th c. AC), composed by various entrances, large long walls (3-5m high,~10km long) & natural cliffs. |
| OSM `website` | https://www.mythologie.fr/Mur%20paien.htm |

## What the model contains

Tier **T1**, status `location-only`, 44 elements (marker 1, road 39, wall 2, waterway 1, cliff 1).

Evidence: documented 0, mapped 44, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7829277 historic=archaeological_site 1934 m from ledger point
- site is a site relation of 24 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1809 x 2755 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.44944/7.38944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q2971715 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 23 elements); data/traces/chateau-du-hagelschloss-q2971715.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
