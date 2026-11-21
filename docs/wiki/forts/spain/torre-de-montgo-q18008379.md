# Torre de Montgó

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-montgo-q18008379` |
| Coordinates | 42.1108, 3.17413 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.1108/3.17413)) |
| Wikidata | [Q18008379](https://www.wikidata.org/wiki/Q18008379) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | L'Escala |
| Inception | 1600 |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 110 elements (outline 1, road 26, building 44, cliff 6, coastline 5, wall 18, retaining-wall 7, water 3).

Evidence: documented 0, mapped 110, inferred 0, derived 3; heights documented 40, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/190629362 historic=(none; chosen by its Wikidata id) Q18008379 1 m from ledger point
- island ring (477 m2) cut out of sea-2
- origin moved 1 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":13,"medianInside":0.1,"medianOutside":11.8}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":10.8}
- sea-2: DEM check ok {"cells":87,"medianInside":0,"medianOutside":28.3}
- 70 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.1108/3.17413) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=3; wikidata:Q18008379 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 109 elements); data/traces/torre-de-montgo-q18008379.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 110 elements; outline osm:way/190629362 historic=(none; chosen by its Wikidata id) Q18008379 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
