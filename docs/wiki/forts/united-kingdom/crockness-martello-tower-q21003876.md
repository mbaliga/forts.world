# Crockness Martello Tower

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `crockness-martello-tower-q21003876` |
| Coordinates | 58.82311, -3.17189 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.82311/-3.17189)) |
| Wikidata | [Q21003876](https://www.wikidata.org/wiki/Q21003876) (CC0) |
| Wikidata class | fortification |
| Types | Martello tower |
| Administrative area | Orkney Islands |
| Inception | 1812 |
| Designations | scheduled monument |
| Wikipedia language editions | 2 |
| OSM `historic` | martello_tower |

## What the model contains

Tier **T1**, status `outline-only`, 11 elements (outline 1, coastline 1, zone 8, water 1).

Evidence: documented 0, mapped 11, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/118107629 historic=martello_tower Q21003876 2 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":202,"medianInside":3.7,"medianOutside":5.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.82311/-3.17189) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Martello tower; sitelinks=2; wikidata:Q21003876 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 11 elements); data/traces/crockness-martello-tower-q21003876.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 11 elements; outline osm:way/118107629 historic=martello_tower Q21003876 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
