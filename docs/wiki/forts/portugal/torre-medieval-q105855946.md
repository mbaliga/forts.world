# Torre Medieval

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-medieval-q105855946` |
| Coordinates | 40.91578, -8.26395 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.91578/-8.26395)) |
| Wikidata | [Q105855946](https://www.wikidata.org/wiki/Q105855946) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage\|tower house |
| Administrative area | Arouca e Burgo |
| Designations | Under study listing |
| Wikipedia language editions | 0 |
| OSM `historic` | tower |
| OSM `heritage` | no |

## What the model contains

Tier **T1**, status `outline-only`, 17 elements (outline 1, marker 1, road 8, zone 3, waterway 3, building 1).

Evidence: documented 0, mapped 17, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/957897975 historic=tower Q105855946 7 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.91578/-8.26395) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage\|tower house; sitelinks=0; wikidata:Q105855946 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 17 elements); data/traces/torre-medieval-q105855946.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 17 elements; outline osm:way/957897975 historic=tower Q105855946 7 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
