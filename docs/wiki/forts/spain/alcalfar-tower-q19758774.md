# Alcalfar Tower

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alcalfar-tower-q19758774` |
| Coordinates | 39.82511, 4.29607 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.82511/4.29607)) |
| Wikidata | [Q19758774](https://www.wikidata.org/wiki/Q19758774) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Sant Lluís |
| Inception | 1787 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | martello_tower |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 14 elements (outline 1, road 7, coastline 1, wall 4, water 1).

Evidence: documented 0, mapped 14, inferred 0, derived 1; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/334459172 historic=martello_tower Q19758774 1 m from ledger point
- sea-0: DEM check ok {"cells":212,"medianInside":0,"medianOutside":9.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.82511/4.29607) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=4; wikidata:Q19758774 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 14 elements); data/traces/alcalfar-tower-q19758774.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 14 elements; outline osm:way/334459172 historic=martello_tower Q19758774 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
