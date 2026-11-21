# Torre Vigía de Torret

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-vigia-de-torret-q43142805` |
| Coordinates | 39.82478, 4.25112 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.82478/4.25112)) |
| Wikidata | [Q43142805](https://www.wikidata.org/wiki/Q43142805) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Sant Lluís |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |
| OSM `historic` | tower |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 33 elements (outline 1, road 9, wall 16, building 6, zone 1).

Evidence: documented 0, mapped 33, inferred 0, derived 0; heights documented 6, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/580234105 historic=tower Q43142805 5 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.82478/4.25112) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=0; wikidata:Q43142805 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 33 elements); data/traces/torre-vigia-de-torret-q43142805.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 33 elements; outline osm:way/580234105 historic=tower Q43142805 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
