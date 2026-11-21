# Faro de Roche

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `faro-de-roche-q28375388` |
| Coordinates | 36.29552, -6.14002 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.29552/-6.14002)) |
| Wikidata | [Q28375388](https://www.wikidata.org/wiki/Q28375388) (CC0) |
| Wikidata class | fortification |
| Types | lighthouse\|watchtower |
| Administrative area | Conil de la Frontera |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 28 elements (outline 1, waterway 1, road 13, zone 1, building 8, coastline 1, cliff 1, water 2).

Evidence: documented 0, mapped 28, inferred 0, derived 2; heights documented 1, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/631331886 historic=(none; chosen by its Wikidata id) Q28375388 4 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":165,"medianInside":0,"medianOutside":10.6}
- sea-1: DEM check ok {"cells":17,"medianInside":0,"medianOutside":5.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.29552/-6.14002) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; lighthouse\|watchtower; sitelinks=3; wikidata:Q28375388 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 28 elements); data/traces/faro-de-roche-q28375388.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 28 elements; outline osm:way/631331886 historic=(none; chosen by its Wikidata id) Q28375388 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
