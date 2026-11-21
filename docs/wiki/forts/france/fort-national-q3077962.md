# Fort National

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-national-q3077962` |
| Coordinates | 48.65472, -2.02333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.65472/-2.02333)) |
| Wikidata | [Q3077962](https://www.wikidata.org/wiki/Q3077962) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Saint-Malo |
| Inception | 1689 |
| Designations | classified historical monument |
| Wikipedia language editions | 8 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `description` | Anciennement Fort Royal, le bâtiment est classé en mai 1906, suivi par les murs d'enceinte en 1913. |

## What the model contains

Tier **T1**, status `outline+walls`, 20 elements (outline 1, building 2, wall 3, coastline 2, zone 1, road 9, water 2).

Evidence: documented 0, mapped 20, inferred 0, derived 2; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/305880274 historic=fort Q3077962 15 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":71,"medianInside":0,"medianOutside":0}
- sea-1: DEM check failed {"cells":105,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.65472/-2.02333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=8; wikidata:Q3077962 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 20 elements); data/traces/fort-national-q3077962.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
