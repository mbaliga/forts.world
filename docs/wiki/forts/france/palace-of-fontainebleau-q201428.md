# Palace of Fontainebleau

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palace-of-fontainebleau-q201428` |
| Coordinates | 48.40239, 2.70008 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.40239/2.70008)) |
| Wikidata | [Q201428](https://www.wikidata.org/wiki/Q201428) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum\|château |
| Administrative area | Fontainebleau |
| Designations | classified historical monument\|World Heritage Site |
| UNESCO WHC id | 160 |
| Wikipedia language editions | 56 |
| OSM `historic` | castle |
| OSM `heritage` | 1 |
| OSM `website` | https://www.chateaudefontainebleau.fr |

## What the model contains

Tier **T1**, status `location-only`, 353 elements (marker 7, road 289, water 5, building 681, zone 25, waterway 1, wall 42, retaining-wall 3).

Evidence: documented 0, mapped 353, inferred 0, derived 0; heights documented 11, inferred 0, unknown 154.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/214892 historic=castle Q201428 53 m from ledger point
- site is a site relation of 5 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (434 x 227 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 681 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 289 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.40239/2.70008) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum\|château; sitelinks=56; wikidata:Q201428 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 317 elements); data/traces/palace-of-fontainebleau-q201428.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
