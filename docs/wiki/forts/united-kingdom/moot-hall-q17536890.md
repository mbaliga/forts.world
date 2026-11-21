# Moot Hall

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `moot-hall-q17536890` |
| Coordinates | 51.7316, 0.67729 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.7316/0.67729)) |
| Wikidata | [Q17536890](https://www.wikidata.org/wiki/Q17536890) (CC0) |
| Wikidata class | fortification |
| Types | tower house\|historic building |
| Administrative area | Maldon |
| Inception | 1420 |
| Designations | Grade I listed building |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 265 elements (outline 1, road 136, waterway 1, building 387, water 3, wall 1, zone 3).

Evidence: documented 0, mapped 265, inferred 0, derived 0; heights documented 2, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/98640369 historic=(none; chosen by its Wikidata id) Q17536890 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 387 mapped (trace size budget); the rest of the town is not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.7316/0.67729) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house\|historic building; sitelinks=2; wikidata:Q17536890 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 267 elements); data/traces/moot-hall-q17536890.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 265 elements; outline osm:way/98640369 historic=(none; chosen by its Wikidata id) Q17536890 7 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
