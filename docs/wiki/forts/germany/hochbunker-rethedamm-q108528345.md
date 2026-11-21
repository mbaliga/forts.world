# Hochbunker Rethedamm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hochbunker-rethedamm-q108528345` |
| Coordinates | 53.50537, 9.9668 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.50537/9.9668)) |
| Wikidata | [Q108528345](https://www.wikidata.org/wiki/Q108528345) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter\|truppenmannschaftsbunker |
| Administrative area | Hamburg |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 52 elements (outline 1, waterway 3, road 28, building 18, wall 2).

Evidence: documented 0, mapped 52, inferred 0, derived 0; heights documented 13, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/105077763 historic=(none; chosen by its Wikidata id) Q108528345 4 m from ledger point

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.50537/9.9668) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter\|truppenmannschaftsbunker; sitelinks=1; wikidata:Q108528345 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 52 elements); data/traces/hochbunker-rethedamm-q108528345.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 52 elements; outline osm:way/105077763 historic=(none; chosen by its Wikidata id) Q108528345 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
