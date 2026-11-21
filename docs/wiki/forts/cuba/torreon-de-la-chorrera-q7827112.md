# Torreón de la Chorrera

> Cuba · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torreon-de-la-chorrera-q7827112` |
| Coordinates | 23.132, -82.409 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.132/-82.409)) |
| Wikidata | [Q7827112](https://www.wikidata.org/wiki/Q7827112) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Vereda Nueva, La Habana |
| Designations | part of UNESCO World Heritage Site |
| UNESCO WHC id | 204-007 |
| Wikipedia language editions | 5 |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 130 elements (outline 1, road 56, zone 9, retaining-wall 5, building 50, coastline 5, wall 1, water 3).

Evidence: documented 0, mapped 130, inferred 0, derived 3; heights documented 5, inferred 0, unknown 51.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/220953203 historic=(none; chosen by its Wikidata id) Q7827112 56 m from ledger point
- origin moved 57 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":387,"medianInside":2.6,"medianOutside":3.5}
- sea-1: DEM check failed {"cells":387,"medianInside":2.9,"medianOutside":2.8}
- sea-2: DEM check ok {"cells":249,"medianInside":1.3,"medianOutside":5}
- 55 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.132/-82.409) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q7827112 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 145 elements); data/traces/torreon-de-la-chorrera-q7827112.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 130 elements; outline osm:way/220953203 historic=(none; chosen by its Wikidata id) Q7827112 56 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/cuba.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
