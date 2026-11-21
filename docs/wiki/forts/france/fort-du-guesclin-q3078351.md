# Fort Du Guesclin

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-du-guesclin-q3078351` |
| Coordinates | 48.69667, -1.89611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.69667/-1.89611)) |
| Wikidata | [Q3078351](https://www.wikidata.org/wiki/Q3078351) (CC0) |
| Wikidata class | castle |
| Types | château\|islet\|fort |
| Administrative area | Saint-Coulomb |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 20 elements (outline 1, coastline 3, road 5, wall 2, retaining-wall 1, zone 5, cliff 1, water 2).

Evidence: documented 0, mapped 20, inferred 0, derived 2; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/95134482 historic=castle Q3078351 23 m from ledger point
- island ring (7273 m2) cut out of sea-0
- origin moved 22 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":375,"medianInside":0,"medianOutside":0}
- sea-1: DEM check failed {"cells":400,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.69667/-1.89611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; château\|islet\|fort; sitelinks=6; wikidata:Q3078351 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 20 elements); data/traces/fort-du-guesclin-q3078351.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
