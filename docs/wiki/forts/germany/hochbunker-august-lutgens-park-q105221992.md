# Hochbunker August-Lütgens-Park

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hochbunker-august-lutgens-park-q105221992` |
| Coordinates | 53.55687, 9.94898 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.55687/9.94898)) |
| Wikidata | [Q105221992](https://www.wikidata.org/wiki/Q105221992) (CC0) |
| Wikidata class | fortification |
| Types | high-rise bunker |
| Administrative area | Hamburg |
| Designations | heritage monument in Hamburg |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 381 elements (outline 1, marker 4, road 200, building 165, zone 6, wall 5).

Evidence: documented 0, mapped 381, inferred 0, derived 0; heights documented 102, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/903007764 historic=(none; chosen by its Wikidata id) Q105221992 6 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.55687/9.94898) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; high-rise bunker; sitelinks=1; wikidata:Q105221992 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 377 elements); data/traces/hochbunker-august-lutgens-park-q105221992.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 381 elements; outline osm:way/903007764 historic=(none; chosen by its Wikidata id) Q105221992 6 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
