# Windsbach watchtower

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `windsbach-watchtower-q130278924` |
| Coordinates | 49.24675, 10.82584 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.24675/10.82584)) |
| Wikidata | [Q130278924](https://www.wikidata.org/wiki/Q130278924) (CC0) |
| Wikidata class | fortification |
| Types | architectural heritage monument\|watchtower |
| Administrative area | Windsbach |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | tower |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 217 elements (outline 1, marker 2, road 74, waterway 3, zone 4, building 262, wall 13).

Evidence: documented 0, mapped 217, inferred 0, derived 0; heights documented 0, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/464637910 historic=tower Q130278924 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 262 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.24675/10.82584) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; architectural heritage monument\|watchtower; sitelinks=0; wikidata:Q130278924 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 253 elements); data/traces/windsbach-watchtower-q130278924.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 217 elements; outline osm:way/464637910 historic=tower Q130278924 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
