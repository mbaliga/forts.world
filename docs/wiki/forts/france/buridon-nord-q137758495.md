# Buridon Nord

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `buridon-nord-q137758495` |
| Coordinates | 50.47424, 3.47943 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.47424/3.47943)) |
| Wikidata | [Q137758495](https://www.wikidata.org/wiki/Q137758495) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Wikipedia language editions | 1 |
| OSM `historic` | bunker |

## What the model contains

Tier **T1**, status `outline+walls`, 54 elements (outline 1, road 5, building 37, zone 8, wall 3).

Evidence: documented 0, mapped 54, inferred 0, derived 0; heights documented 0, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19754083 historic=bunker Q137758495 1 m from ledger point

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.47424/3.47943) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=1; wikidata:Q137758495 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 53 elements); data/traces/buridon-nord-q137758495.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 54 elements; outline osm:relation/19754083 historic=bunker Q137758495 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
