# Torre de s'Estelella

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-s-estelella-q11952311` |
| Coordinates | 39.35892, 2.90208 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.35892/2.90208)) |
| Wikidata | [Q11952311](https://www.wikidata.org/wiki/Q11952311) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Llucmajor |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 16 elements (outline 1, coastline 1, road 12, wall 1, water 1).

Evidence: documented 0, mapped 16, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/265766196 historic=(none; chosen by its Wikidata id) Q11952311 1 m from ledger point
- sea-0: DEM check ok {"cells":109,"medianInside":0,"medianOutside":10}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.35892/2.90208) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=3; wikidata:Q11952311 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 16 elements); data/traces/torre-de-s-estelella-q11952311.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 16 elements; outline osm:way/265766196 historic=(none; chosen by its Wikidata id) Q11952311 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
