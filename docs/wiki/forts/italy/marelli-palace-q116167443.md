# Marelli Palace

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `marelli-palace-q116167443` |
| Coordinates | 45.61492, 7.73617 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.61492/7.73617)) |
| Wikidata | [Q116167443](https://www.wikidata.org/wiki/Q116167443) (CC0) |
| Wikidata class | castle |
| Types | palace\|castle |
| Administrative area | Hône |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 272 elements (outline 1, marker 2, waterway 4, road 61, zone 6, building 190, wall 4, retaining-wall 4).

Evidence: documented 0, mapped 272, inferred 0, derived 0; heights documented 0, inferred 0, unknown 198.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/479079511 historic=(none; chosen by its Wikidata id) Q116167443 29 m from ledger point
- origin moved 28 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.61492/7.73617) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; palace\|castle; sitelinks=1; wikidata:Q116167443 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 263 elements); data/traces/marelli-palace-q116167443.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 272 elements; outline osm:way/479079511 historic=(none; chosen by its Wikidata id) Q116167443 29 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
