# Ochsenpferchbunker

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ochsenpferchbunker-q17590677` |
| Coordinates | 49.5001, 8.46148 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.5001/8.46148)) |
| Wikidata | [Q17590677](https://www.wikidata.org/wiki/Q17590677) (CC0) |
| Wikidata class | fortification |
| Types | high-rise bunker |
| Administrative area | Mannheim |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 336 elements (outline 1, road 129, zone 18, retaining-wall 2, building 228, wall 65, waterway 1).

Evidence: documented 0, mapped 336, inferred 0, derived 0; heights documented 86, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/100732769 historic=(none; chosen by its Wikidata id) Q17590677 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 228 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.5001/8.46148) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; high-rise bunker; sitelinks=2; wikidata:Q17590677 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 335 elements); data/traces/ochsenpferchbunker-q17590677.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 336 elements; outline osm:way/100732769 historic=(none; chosen by its Wikidata id) Q17590677 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
