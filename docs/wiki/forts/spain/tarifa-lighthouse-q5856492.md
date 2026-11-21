# Tarifa Lighthouse

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tarifa-lighthouse-q5856492` |
| Coordinates | 36.0011, -5.60959 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.0011/-5.60959)) |
| Wikidata | [Q5856492](https://www.wikidata.org/wiki/Q5856492) (CC0) |
| Wikidata class | fortification |
| Types | lighthouse\|watchtower\|monument |
| Administrative area | Tarifa |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `website` | https://www.diariodejerez.es/article/provincia/1067601/una/torre/almenara/llena/tecnologia.html |

## What the model contains

Tier **T1**, status `outline+walls`, 44 elements (outline 1, road 10, building 8, zone 1, wall 20, coastline 2, water 2).

Evidence: documented 0, mapped 44, inferred 0, derived 2; heights documented 0, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/206724556 historic=(none; chosen by its Wikidata id) Q5856492 6 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":1,"medianInside":0.6,"medianOutside":3.3}
- sea-1: DEM check ok {"cells":157,"medianInside":0,"medianOutside":6.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.0011/-5.60959) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; lighthouse\|watchtower\|monument; sitelinks=3; wikidata:Q5856492 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 43 elements); data/traces/tarifa-lighthouse-q5856492.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 44 elements; outline osm:way/206724556 historic=(none; chosen by its Wikidata id) Q5856492 6 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
