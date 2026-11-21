# Hochbunker Heckeshorn

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hochbunker-heckeshorn-q1304239` |
| Coordinates | 52.4332, 13.1615 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.4332/13.1615)) |
| Wikidata | [Q1304239](https://www.wikidata.org/wiki/Q1304239) (CC0) |
| Wikidata class | fortification |
| Types | high-rise bunker |
| Administrative area | Steglitz-Zehlendorf |
| Inception | 1943 |
| Wikipedia language editions | 1 |
| OSM `historic` | bunker |

## What the model contains

Tier **T1**, status `outline-only`, 144 elements (outline 1, water 1, road 47, building 94, waterway 1).

Evidence: documented 0, mapped 144, inferred 0, derived 0; heights documented 32, inferred 0, unknown 62.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29113373 historic=bunker Q1304239 4 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.4332/13.1615) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; high-rise bunker; sitelinks=1; wikidata:Q1304239 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 139 elements); data/traces/hochbunker-heckeshorn-q1304239.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 144 elements; outline osm:way/29113373 historic=bunker Q1304239 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
