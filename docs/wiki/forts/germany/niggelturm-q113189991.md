# Niggelturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `niggelturm-q113189991` |
| Coordinates | 48.40368, 8.01332 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.40368/8.01332)) |
| Wikidata | [Q113189991](https://www.wikidata.org/wiki/Q113189991) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Gengenbach |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 7, waterway 5, road 185, building 328, water 2, wall 4, zone 10, retaining-wall 1).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 5, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/250633078 historic=yes Q113189991 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 328 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 185 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.40368/8.01332) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q113189991 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 300 elements); data/traces/niggelturm-q113189991.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
