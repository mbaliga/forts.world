# Reste eines Turmes der Stadener Stadtmauer

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `reste-eines-turmes-der-stadener-stadtmauer-q116509213` |
| Coordinates | 50.331, 8.91241 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.331/8.91241)) |
| Wikidata | [Q116509213](https://www.wikidata.org/wiki/Q116509213) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Florstadt |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 0 |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 242 elements (outline 1, marker 1, road 107, waterway 3, building 308, zone 7, wall 3).

Evidence: documented 0, mapped 242, inferred 0, derived 0; heights documented 16, inferred 0, unknown 107.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/291954522 historic=(none; chosen by its Wikidata id) Q116509213 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 308 mapped (trace size budget); the rest of the town is not drawn
- origin moved 9 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.331/8.91241) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=0; wikidata:Q116509213 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 237 elements); data/traces/reste-eines-turmes-der-stadener-stadtmauer-q116509213.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 242 elements; outline osm:way/291954522 historic=(none; chosen by its Wikidata id) Q116509213 9 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
