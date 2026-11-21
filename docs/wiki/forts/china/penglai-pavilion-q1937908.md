# Penglai Pavilion

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `penglai-pavilion-q1937908` |
| Coordinates | 37.82999, 120.75073 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.82999/120.75073)) |
| Wikidata | [Q1937908](https://www.wikidata.org/wiki/Q1937908) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|Chinese AAAAA-rated tourist attraction |
| Administrative area | Shandong |
| Designations | Major Historical and Cultural Site Protected at the National Level |
| Wikipedia language editions | 8 |

## What the model contains

Tier **T1**, status `outline+walls`, 18 elements (outline 1, water 3, road 10, wall 1, coastline 2, building 1).

Evidence: documented 0, mapped 18, inferred 0, derived 2; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1064751635 historic=(none; chosen by its Wikidata id) Q1937908 443 m from ledger point
- origin moved 446 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":5,"medianInside":3,"medianOutside":12.6}
- sea-1: DEM check ok {"cells":121,"medianInside":2.6,"medianOutside":21}
- 13 DEM cells below -3 m (bathymetry) clamped to -3 m
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.82999/120.75073) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|Chinese AAAAA-rated tourist attraction; sitelinks=8; wikidata:Q1937908 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 0 elements); data/traces/penglai-pavilion-q1937908.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 18 elements; outline osm:way/1064751635 historic=(none; chosen by its Wikidata id) Q1937908 443 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
